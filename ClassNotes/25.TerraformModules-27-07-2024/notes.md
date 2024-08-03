### Terraform Modules

Terraform modules are a way to encapsulate and reuse sets of Terraform resources and configurations. Modules allow you to define and manage infrastructure as code efficiently, reducing redundancy and improving maintainability.

#### Basic Structure of a Module

A Terraform module typically consists of the following files:
- **`main.tf`**: Contains the primary resource definitions.
- **`variables.tf`**: Defines the input variables for the module.
- **`outputs.tf`**: Defines the output values of the module.
- **`README.md`** (optional): Provides documentation on how to use the module.

### Example: Azure Resource Group Module

#### Step 1: Create the Module Directory

Create a directory named `azure-resource-group` for your module.

#### Step 2: Define the Module Files

1. **`variables.tf`**: Define input variables for the resource group.
    ```hcl
    variable "resource_group_name" {
      description = "The name of the resource group"
      type        = string
    }

    variable "location" {
      description = "The location/region where the resource group is created"
      type        = string
      default     = "East US"
    }
    ```

2. **`main.tf`**: Define the resource group.
    ```hcl
    provider "azurerm" {
      features {}
    }

    resource "azurerm_resource_group" "example" {
      name     = var.resource_group_name
      location = var.location
    }
    ```

3. **`outputs.tf`**: Define the output values.
    ```hcl
    output "resource_group_name" {
      description = "The name of the resource group"
      value       = azurerm_resource_group.example.name
    }

    output "resource_group_location" {
      description = "The location of the resource group"
      value       = azurerm_resource_group.example.location
    }
    ```

4. **`README.md`** (optional): Document the module usage.
    ```markdown
    # Azure Resource Group Module

    This module creates an Azure Resource Group.

    ## Usage

    ```hcl
    module "resource_group" {
      source              = "./azure-resource-group"
      resource_group_name = "my-resource-group"
      location            = "East US"
    }
    ```

    ## Inputs

    | Name               | Description                           | Type   | Default  | Required |
    |--------------------|---------------------------------------|--------|----------|----------|
    | resource_group_name| The name of the resource group        | string | n/a      | yes      |
    | location           | The location/region for the resource group | string | "East US"| no    |

    ## Outputs

    | Name                | Description                            |
    |---------------------|----------------------------------------|
    | resource_group_name | The name of the resource group         |
    | resource_group_location | The location of the resource group |
    ```

#### Step 3: Use the Module in Your Configuration

To use the `azure-resource-group` module in your Terraform configuration, reference it as shown below:

```hcl
module "resource_group" {
  source              = "./azure-resource-group"
  resource_group_name = "my-resource-group"
  location            = "East US"
}
```

### Advanced Module Example

You can create more complex modules by combining multiple resources and adding more variables and outputs. Here’s an advanced example that includes an Azure storage account along with the resource group.

1. **`variables.tf`**: Add variables for the storage account.
    ```hcl
    variable "resource_group_name" {
      description = "The name of the resource group"
      type        = string
    }

    variable "location" {
      description = "The location/region where the resource group is created"
      type        = string
      default     = "East US"
    }

    variable "storage_account_name" {
      description = "The name of the storage account"
      type        = string
    }
    ```

2. **`main.tf`**: Define the resource group and storage account.
    ```hcl
    provider "azurerm" {
      features {}
    }

    resource "azurerm_resource_group" "example" {
      name     = var.resource_group_name
      location = var.location
    }

    resource "azurerm_storage_account" "example" {
      name                     = var.storage_account_name
      resource_group_name      = azurerm_resource_group.example.name
      location                 = azurerm_resource_group.example.location
      account_tier             = "Standard"
      account_replication_type = "LRS"
    }
    ```

3. **`outputs.tf`**: Add outputs for the storage account.
    ```hcl
    output "resource_group_name" {
      description = "The name of the resource group"
      value       = azurerm_resource_group.example.name
    }

    output "resource_group_location" {
      description = "The location of the resource group"
      value       = azurerm_resource_group.example.location
    }

    output "storage_account_name" {
      description = "The name of the storage account"
      value       = azurerm_storage_account.example.name
    }

    output "storage_account_endpoint" {
      description = "The endpoint URL of the storage account"
      value       = azurerm_storage_account.example.primary_blob_endpoint
    }
    ```

4. **`README.md`** (optional): Update the documentation.
    ```markdown
    # Azure Resource Group and Storage Account Module

    This module creates an Azure Resource Group and a Storage Account.

    ## Usage

    ```hcl
    module "resource_group_storage" {
      source                = "./azure-resource-group-storage"
      resource_group_name   = "my-resource-group"
      location              = "East US"
      storage_account_name  = "mystorageaccount"
    }
    ```

    ## Inputs

    | Name                 | Description                             | Type   | Default  | Required |
    |----------------------|-----------------------------------------|--------|----------|----------|
    | resource_group_name  | The name of the resource group          | string | n/a      | yes      |
    | location             | The location/region for the resource group | string | "East US"| no    |
    | storage_account_name | The name of the storage account         | string | n/a      | yes      |

    ## Outputs

    | Name                     | Description                            |
    |--------------------------|----------------------------------------|
    | resource_group_name      | The name of the resource group         |
    | resource_group_location  | The location of the resource group     |
    | storage_account_name     | The name of the storage account        |
    | storage_account_endpoint | The endpoint URL of the storage account|
    ```

### Conclusion

Modules in Terraform help to modularize and reuse code, making infrastructure management more efficient and maintainable. By defining input variables, resources, and output values, you can create complex infrastructure setups and reuse them across different environments and projects.