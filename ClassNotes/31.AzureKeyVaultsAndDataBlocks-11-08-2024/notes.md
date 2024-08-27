
# Azure Key Vault Class Notes

## **Introduction**

**Azure Key Vault** is a cloud service offered by Microsoft Azure that securely manages sensitive information such as secrets, keys, and certificates. It helps safeguard cryptographic keys and secrets used by cloud applications and services.

### **Key Features**

1. **Secret Management**:
   - **Storage and Access**: Securely store and control access to tokens, passwords, certificates, API keys, and other secrets.
   - **Versioning**: Manage multiple versions of secrets, allowing rollback to previous versions if needed.

2. **Key Management**:
   - **Encryption Keys**: Manage cryptographic keys used for encrypting data.
   - **Key Rotation**: Automate key rotation to maintain security compliance.

3. **Certificate Management**:
   - **Certificates**: Provision, manage, and deploy TLS/SSL certificates.
   - **Certificate Issuance**: Integrates with certificate authorities to handle certificate lifecycle management.

4. **Access Policies**:
   - **Fine-grained Control**: Define who can access specific secrets, keys, or certificates.
   - **Role-Based Access Control (RBAC)**: Integrates with Azure AD for identity and access management.

5. **Compliance and Auditing**:
   - **Logging and Monitoring**: Track access and usage of vault contents with Azure Monitor and Azure Security Center.
   - **Compliance**: Meets various regulatory standards such as ISO, GDPR, and more.

## **Core Concepts**

1. **Vault**:
   - **Definition**: A container for storing secrets, keys, and certificates.
   - **Configuration**: Define access policies and manage keys and secrets within a vault.

2. **Secrets**:
   - **Definition**: Any sensitive data that you want to keep secure, like passwords or connection strings.
   - **Operations**: Create, read, update, and delete secrets.

3. **Keys**:
   - **Definition**: Cryptographic keys used for encryption, decryption, and signing.
   - **Operations**: Create, import, manage, and use keys for various cryptographic operations.

4. **Certificates**:
   - **Definition**: Digital certificates for secure communications.
   - **Operations**: Provision, renew, and manage certificates.

## **Getting Started with Azure Key Vault**

### **1. Create a Key Vault**

- **Portal**:
  - Navigate to the Azure portal.
  - Click on "Create a resource" and search for "Key Vault."
  - Follow the prompts to configure and create your vault.

- **Azure CLI**:
  ```bash
  az keyvault create --name <YourVaultName> --resource-group <YourResourceGroup> --location <YourLocation>
  ```

### **2. Add a Secret**

- **Portal**:
  - Open your Key Vault in the Azure portal.
  - Navigate to "Secrets" and click "Generate/Import."
  - Enter the name and value of your secret.

- **Azure CLI**:
  ```bash
  az keyvault secret set --vault-name <YourVaultName> --name <SecretName> --value <SecretValue>
  ```

### **3. Retrieve a Secret**

- **Portal**:
  - Go to the "Secrets" section of your Key Vault.
  - Click on the desired secret to view its value.

- **Azure CLI**:
  ```bash
  az keyvault secret show --vault-name <YourVaultName> --name <SecretName>
  ```

### **4. Set Access Policies**

- **Portal**:
  - In the Key Vault, navigate to "Access policies."
  - Click "Add Access Policy" and configure permissions for users or applications.

- **Azure CLI**:
  ```bash
  az keyvault set-policy --name <YourVaultName> --spn <YourServicePrincipalId> --secret-permissions get list
  ```

### **5. Monitor and Manage**

- **Logging**:
  - Use Azure Monitor to set up logging and alerts.
  - Configure diagnostics settings to send logs to Azure Log Analytics or other destinations.

- **Auditing**:
  - Access logs to audit operations performed on the Key Vault.

## **Best Practices**

1. **Access Control**: Implement least privilege access policies. Regularly review and update permissions.
2. **Key Rotation**: Regularly rotate keys and secrets to minimize exposure.
3. **Backup and Recovery**: Periodically back up your Key Vault and configure disaster recovery options.
4. **Compliance**: Ensure your usage of Key Vault complies with your organization’s security policies and regulatory requirements.

## **Common Use Cases**

1. **Storing Connection Strings**: Securely store and access database connection strings or API keys.
2. **Managing Encryption Keys**: Use Key Vault to manage keys for data encryption and signing.
3. **Handling Certificates**: Automate the management of certificates used in secure communications.

Certainly! Let's break down the Terraform code you've provided and then discuss **Data Blocks** in Terraform.

## **Terraform Code Explanation**

### **1. Public IP Address Resource**

```hcl
resource "azurerm_public_ip" "pip" {
  name                = "zelectric-vm-pip"
  resource_group_name = "rg-zelectric"
  location            = "westeurope"
  allocation_method   = "Static"
}
```

- **Resource**: `azurerm_public_ip`
- **Purpose**: Creates a static public IP address in Azure.
- **Attributes**:
  - `name`: The name of the public IP address.
  - `resource_group_name`: The Azure Resource Group where the IP address will be created.
  - `location`: The Azure region where the IP address will be allocated.
  - `allocation_method`: Specifies that the IP address is static.

### **2. Data Block for Subnet**

```hcl
data "azurerm_subnet" "frontend_subnet" {
  name                 = "frontend-subnet"
  virtual_network_name = "vnet-zelectric"
  resource_group_name  = "rg-dev-zelectric"
}
```

- **Data Block**: `azurerm_subnet`
- **Purpose**: Fetches information about an existing Azure subnet.
- **Attributes**:
  - `name`: The name of the subnet to retrieve.
  - `virtual_network_name`: The name of the virtual network containing the subnet.
  - `resource_group_name`: The resource group where the virtual network resides.

### **3. Network Interface Resource**

```hcl
resource "azurerm_network_interface" "nic" {
  name                = "zelectricvm-nic"
  location            = "westeurope"
  resource_group_name = "rg-zelectric"

  ip_configuration {
    name                          = "dhondhuips"
    subnet_id                     = data.azurerm_subnet.frontend_subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}
```

- **Resource**: `azurerm_network_interface`
- **Purpose**: Creates a network interface for a virtual machine.
- **Attributes**:
  - `name`: The name of the network interface.
  - `location`: The Azure region where the network interface will be created.
  - `resource_group_name`: The resource group for the network interface.
  - **ip_configuration**: Defines the IP configuration for the interface.
    - `name`: The name of the IP configuration.
    - `subnet_id`: References the subnet obtained from the data block.
    - `private_ip_address_allocation`: Specifies dynamic allocation of the private IP address.
    - `public_ip_address_id`: Associates the network interface with the public IP created earlier.

### **4. Linux Virtual Machine Resource**

```hcl
resource "azurerm_linux_virtual_machine" "vm" {
  name                            = "zelectricvm"
  resource_group_name             = "rg-zelectric"
  location                        = "westeurope"
  size                            = "Standard_F2"
  admin_username                  = "devopsadmin"
  admin_password                  = "P@ssw01rd@123"
  disable_password_authentication = false
  network_interface_ids           = [azurerm_network_interface.nic.id]

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

- **Resource**: `azurerm_linux_virtual_machine`
- **Purpose**: Creates a Linux virtual machine in Azure.
- **Attributes**:
  - `name`: The name of the virtual machine.
  - `resource_group_name`: The resource group for the virtual machine.
  - `location`: The region where the virtual machine will be deployed.
  - `size`: The VM size (e.g., Standard_F2).
  - `admin_username` and `admin_password`: Credentials for the VM admin user.
  - `disable_password_authentication`: Allows password-based authentication.
  - `network_interface_ids`: Associates the VM with the network interface created earlier.
  - **os_disk**: Configuration for the VM’s OS disk.
    - `caching`: Disk caching policy.
    - `storage_account_type`: Type of storage account (e.g., Standard_LRS).
  - **source_image_reference**: Specifies the image to use for the VM (Ubuntu 22.04 LTS).

### **5. Data Blocks for Key Vault**

```hcl
data "azurerm_key_vault" "kv" {
  name                = "Myvault122"
  resource_group_name = "Test_resource"
}

data "azurerm_key_vault_secret" "username" {
  name         = "vmusername"
  key_vault_id = data.azurerm_key_vault.kv.id
}

data "azurerm_key_vault_secret" "password" {
  name         = "vmpassword"
  key_vault_id = data.azurerm_key_vault.kv.id
}
```

- **Data Block**: `azurerm_key_vault`
  - **Purpose**: Fetches information about an existing Azure Key Vault.
  - **Attributes**:
    - `name`: The name of the Key Vault.
    - `resource_group_name`: The resource group where the Key Vault resides.

- **Data Block**: `azurerm_key_vault_secret`
  - **Purpose**: Fetches secrets from the specified Key Vault.
  - **Attributes**:
    - `name`: The name of the secret.
    - `key_vault_id`: References the Key Vault where the secret is stored.

## **Data Blocks in Terraform**

### **Definition**

Data blocks in Terraform are used to retrieve and reference information from existing infrastructure. They do not create or modify resources but instead provide data that can be used in other resources or modules.

### **Purpose**

- **Read Existing Data**: Access information about existing infrastructure components without managing them.
- **Use in Resource Definitions**: Retrieve values needed for configuring other resources, such as IDs or configurations.

### **Key Attributes**

1. **Data Source**: Specifies the type of data to be retrieved, such as `azurerm_subnet`, `azurerm_key_vault`, etc.
2. **Arguments**: Define the criteria for retrieving the data, such as `name`, `resource_group_name`, etc.
3. **Attributes**: Used to access specific properties of the retrieved data, such as `id`, `value`, etc.

### **Example Use Cases**

- **Networking**: Fetching information about existing subnets or VNETs to associate with new resources.
- **Secrets Management**: Retrieving secrets from Azure Key Vault for use in resource configurations, such as VM credentials.
- **Compliance and Auditing**: Accessing configurations or properties from existing resources to ensure compliance with policies.

### **Best Practices**

- **Minimize Dependencies**: Use data sources sparingly to avoid tight coupling between your configurations and existing resources.
- **Version Management**: Be mindful of changes in the infrastructure that might affect the data sources and their attributes.
- **Security**: Ensure sensitive data retrieved through data sources is handled securely, especially when working with secrets.
