### **Terraform Configuration Overview**

The configuration manages the deployment of multiple Azure Linux virtual machines, each with its own network interface and subnet setup. It uses Terraform’s capabilities to automate this infrastructure setup. The `vms` variable is used to define multiple VM configurations in a map format, allowing for scalability and ease of management.

### **1. Variable Definition**

```hcl
variable "vms" {
  type = map(any)
}
```

- **Purpose:** Defines a variable `vms` that holds a map of VM configurations. Each entry in the map contains details for one VM.
- **Type:** `map(any)` allows for a flexible structure where each VM configuration can contain various properties.

### **2. Data Source for Subnet**

```hcl
data "azurerm_subnet" "subnet" {
  for_each             = var.vms
  name                 = each.value.subnet_name
  virtual_network_name = each.value.virtual_network_name
  resource_group_name  = each.value.resource_group_name
}
```

- **Purpose:** Fetches subnet details from Azure for each VM configuration.
- **`for_each`:** Iterates over each entry in the `vms` map.
- **Parameters:**
  - `name`: Subnet name.
  - `virtual_network_name`: Virtual network in which the subnet resides.
  - `resource_group_name`: Resource group containing the subnet.

### **3. Network Interface Resource**

```hcl
resource "azurerm_network_interface" "nic" {
  for_each            = var.vms
  name                = each.value.nic_name
  location            = each.value.location
  resource_group_name = each.value.resource_group_name

  ip_configuration {
    name                          = "dhondhuips"
    subnet_id                     = data.azurerm_subnet.subnet[each.key].id
    private_ip_address_allocation = "Dynamic"
  }
}
```

- **Purpose:** Creates a network interface for each VM.
- **`for_each`:** Iterates over each entry in the `vms` map.
- **Parameters:**
  - `name`: Network interface name.
  - `location`: Azure region where the network interface is deployed.
  - `resource_group_name`: Resource group where the network interface is created.
- **`ip_configuration`:**
  - `subnet_id`: Associates the network interface with the subnet fetched earlier.
  - `private_ip_address_allocation`: Specifies dynamic allocation for private IP.

### **4. Linux Virtual Machine Resource**

```hcl
resource "azurerm_linux_virtual_machine" "vm" {
  for_each                        = var.vms
  name                            = each.value.vm_name
  resource_group_name             = each.value.resource_group_name
  location                        = each.value.location
  size                            = each.value.size
  admin_username                  = data.azurerm_key_vault_secret.username.value
  admin_password                  = data.azurerm_key_vault_secret.password.value
  disable_password_authentication = false
  network_interface_ids           = [azurerm_network_interface.nic[each.key].id]

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
}
```

- **Purpose:** Creates a Linux VM for each entry in the `vms` map.
- **`for_each`:** Iterates over each entry in the `vms` map.
- **Parameters:**
  - `name`: VM name.
  - `resource_group_name`: Resource group where the VM is created.
  - `location`: Azure region where the VM is deployed.
  - `size`: VM size/type.
  - `admin_username` and `admin_password`: Authentication credentials for the VM. These are fetched from Azure Key Vault (though the Key Vault data source is not shown in the provided code).
  - `disable_password_authentication`: Set to `false` to enable password authentication.
  - `network_interface_ids`: Associates the VM with the previously created network interface.
- **`os_disk`:** Specifies the OS disk settings:
  - `caching`: Disk caching policy.
  - `storage_account_type`: Storage type for the OS disk.
- **`source_image_reference`:** Specifies the image used to create the VM. In this case, it's an Ubuntu 22.04 LTS image from Canonical.

### **5. Variable Definition for VMs**

```hcl
vms = {
  vm1 = {
    subnet_name          = "default"
    virtual_network_name = "vnetsoni"
    resource_group_name  = "res-soni"
    nic_name             = "vm1-nic"
    location             = "centralus"
    vm_name              = "bhootiyavm1"
    size                 = "Standard_F2"
  }
  vm2 = {
    subnet_name          = "bhootiya_subnet"
    virtual_network_name = "vnetsoni"
    resource_group_name  = "res-soni"
    nic_name             = "vm2-nic"
    location             = "centralus"
    vm_name              = "bhootiyavm2"
    size                 = "Standard_F2"
  }
}
```

- **Purpose:** Defines a map with configurations for multiple VMs.
- **Keys:** `vm1` and `vm2` represent different VM instances.
- **Properties:** Each VM configuration includes details about subnet, virtual network, network interface, location, VM name, and size.

### **Summary**

The provided Terraform code automates the creation of Azure network interfaces and Linux virtual machines. It uses a map-based variable to handle multiple VMs, fetches subnet details using a data source, and sets up network interfaces and VMs with the specified configurations. The VMs are set up with dynamic private IP addresses and are connected to their respective subnets through the network interfaces. The configuration also includes specifications for OS disks and VM images.