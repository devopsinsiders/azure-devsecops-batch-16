# Azure Load Balancer 🔄

Azure Load Balancer is a Layer-4 (Transport Layer) load balancing service that distributes incoming network traffic (such as HTTP, HTTPS, TCP, and UDP) across multiple virtual machines (VMs) or instances to ensure proper resource utilization and fault tolerance. It helps you build highly available applications by providing high availability, scalability, and performance.

🌐 **Traffic Distribution**: It uses various load-balancing algorithms like round-robin, least-connections, and more to distribute traffic evenly among backend resources.

🔁 **Frontend and Backend Configuration**: The frontend defines the entry point (IP address and port) for incoming traffic. The backend defines the target resources (VMs, VMSS, or IP addresses) that will receive the traffic.

🏢 **Availability Sets and Availability Zones**: You can use Azure Availability Sets or Availability Zones in conjunction with Azure Load Balancer to distribute traffic across multiple fault domains for improved high availability.

❤️ **Health Probing**: Azure Load Balancer constantly monitors the health of backend resources by sending health probes (e.g., HTTP requests) and directs traffic only to healthy resources.

🔄 **Session Persistence**: It supports session affinity (sticky sessions) to maintain client-to-backend affinity based on client IP or a session cookie.

📥 **Inbound and Outbound Load Balancing**: Azure Load Balancer can be used for both incoming (ingress) and outgoing (egress) traffic.

🌐 **Public and Private Load Balancers**: You can configure public IP addresses for internet-facing applications or private IP addresses for internal applications.

# Terraform Azure Load Balancer Configuration 🚀

This Terraform code deploys an Azure Load Balancer (LB) with associated resources, such as a Public IP, backend address pools, probes, and rules. This configuration is designed to set up a basic load balancing environment for your applications.

## Prerequisites ✅

Before you can use this Terraform configuration, make sure you have the following prerequisites in place:

1. **Azure Account**: You need an active Azure account. 👩‍💻

2. **Terraform Installed**: Ensure Terraform is installed on your local machine or the environment where you plan to run this code. You can download Terraform from [terraform.io](https://www.terraform.io/downloads.html). 🌍

3. **Azure CLI**: Make sure you have the Azure CLI installed and configured with your Azure subscription. You can install it from [here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli). 📦

## Configuration ⚙️

The provided Terraform configuration deploys the following Azure resources:

- Public IP Address 🌐
- Azure Load Balancer 🏢
- Backend Address Pools 📚
- Load Balancer Probes 🔍
- Load Balancer Rules 📝

### Variables

Before running Terraform, you must customize the configuration by setting values for the following variables:

- `var.location`: The Azure region where you want to deploy the resources. 🗺️

- `var.rg_name`: The name of the Azure resource group where the resources will be created. 🏢

Please make sure to set these variables to match your desired configuration. 🛠️

## Resources 🧰

### Public IP Address 🌐

```hcl
resource "azurerm_public_ip" "PublicIPForLB" {
  name                = "PublicIPForLB"
  location            = var.location
  resource_group_name = var.rg_name
  allocation_method   = "Static"
  sku                 = "Standard"
}
```

- This resource block defines a static Public IP address that will be associated with the Load Balancer. 🌟

### Azure Load Balancer 🏢

```hcl
resource "azurerm_lb" "NginxLoadBalancer" {
  name                = "NginxLoadBalancer"
  location            = var.location
  resource_group_name = var.rg_name
  sku                 = "Standard"
  frontend_ip_configuration {
    name                 = "PublicIPAddress"
    public_ip_address_id = azurerm_public_ip.PublicIPForLB.id
  }
}
```

- This resource block defines the Azure Load Balancer. 🔄

- It associates the previously created Public IP address with the Load Balancer. 🌍

### Backend Address Pools 📚

```hcl
resource "azurerm_lb_backend_address_pool" "BackEndAddressPool" {
  loadbalancer_id = azurerm_lb.NginxLoadBalancer.id
  name            = "BackEndAddressPool"
}
```

- This resource block defines a backend address pool where backend virtual machines are added. The Load Balancer will distribute traffic to the virtual machines in this pool. 🎯

### Backend Address Pool Addresses 🏙️

```hcl
resource "azurerm_lb_backend_address_pool_address" "backendnginx01" {
  name                    = "backendnginx01"
  backend_address_pool_id = azurerm_lb_backend_address_pool.BackEndAddressPool.id
  virtual_network_id      = data.azurerm_virtual_network.lb-demo.id
  ip_address              = data.azurerm_virtual_machine.nginxvm01.private_ip_address
}

resource "azurerm_lb_backend_address_pool_address" "backendnginx02" {
  name                    = "backendnginx02"
  backend_address_pool_id = azurerm_lb_backend_address_pool.BackEndAddressPool.id
  virtual_network_id      = data.azurerm_virtual_network.lb-demo.id
  ip_address              = data.azurerm_virtual_machine.nginxvm02.private_ip_address
}
```

- These resource blocks define the backend virtual machines that will receive traffic from the Load Balancer. ⚙️

- Replace the `ip_address` values with the private IP addresses of your backend virtual machines. 🔐

### Load Balancer Probe 🔍

```hcl
resource "azurerm_lb_probe" "nginxprobe" {
  loadbalancer_id = azurerm_lb.NginxLoadBalancer.id
  name            = "http-port"
  port            = 80
}
```

- This resource block defines a probe to monitor the health of the backend resources. It checks the availability of port 80 on the backend virtual machines. 🔄

### Load Balancer Rule 📝

```hcl
resource "azurerm_lb_rule" "example" {
  loadbalancer_id                = azurerm_lb.NginxLoadBalancer.id
  name                           = "NginxRule"
  protocol                       = "Tcp"
  frontend_port                  = 80
  backend_port                   = 80
  frontend_ip_configuration_name = "PublicIPAddress"
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.BackEndAddressPool.id]
  probe_id                       = azurerm_lb_probe.nginxprobe.id
}
```

- This resource block defines a Load Balancer rule that directs incoming traffic on port 80 to the backend address pool. 📜

- It also associates the previously defined probe to monitor the health of backend resources. 🩺

## Usage 🚀

Follow these steps to deploy the resources using Terraform:

1. **Clone the Repository**: Clone this repository to your local machine or the environment where you plan to run Terraform. 📂

2. **Initialize Terraform**: Run the following command to initialize Terraform and download the required providers:

    ```shell
    terraform init
    ```

3. **Review the Plan**: Run the following command to see what Terraform plans to do:

    ```shell
    terraform plan
    ```

    This step will provide you with a summary of the changes that will be made to your Azure environment. 📋

4. **Apply the Configuration**: If the plan looks correct, apply the configuration to create the Azure resources:

    ```shell
    terraform apply
    ```

5. **Cleanup (Optional)**: If you want to remove the resources created by Terraform, you can run the following command:

    ```shell
    terraform destroy
    ```

## Additional Information ℹ️

- The Load Balancer is configured to route traffic on port 80 to the backend address pools defined in the configuration. 🌐

- Probes are used to monitor the health of backend resources. 🔍

- Rules define how traffic is distributed to the backend pools based on the probe status. 📊