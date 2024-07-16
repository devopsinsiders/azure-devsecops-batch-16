### Terraform Variables: Detailed Class Notes with Azure Resource Group Example

#### Overview
Terraform variables allow you to define dynamic values that can be used throughout your Terraform configuration. They enable better reusability and flexibility of your code. Variables can be declared, assigned, and used in various ways, making your configurations more modular and adaptable.

#### Declaring Variables
Variables are declared using the `variable` block in your Terraform configuration. The basic syntax is:

```hcl
variable "variable_name" {
  type        = <TYPE>
  description = "Description of the variable"
  default     = <DEFAULT_VALUE>
}
```

- **`variable_name`**: The name of the variable.
- **`type`**: The type of the variable (string, number, boolean, list, or set).
- **`description`**: A human-readable description of the variable.
- **`default`**: An optional default value for the variable.

#### Types of Variables
1. **String**
   ```hcl
   variable "location" {
     type        = string
     description = "The location where the resource group will be created"
     default     = "East US"
   }
   ```

2. **Number**
   ```hcl
   variable "tag_count" {
     type        = number
     description = "Number of tags to assign to the resource group"
     default     = 3
   }
   ```

3. **Boolean**
   ```hcl
   variable "enable_monitoring" {
     type        = bool
     description = "Enable or disable monitoring for the resource group"
     default     = true
   }
   ```

4. **List**
   ```hcl
   variable "tags" {
     type        = list(string)
     description = "List of tags to assign to the resource group"
     default     = ["environment:production", "department:IT", "owner:admin"]
   }
   ```

5. **Set**
   ```hcl
   variable "allowed_locations" {
     type        = set(string)
     description = "Set of allowed locations for the resource group"
     default     = ["East US", "West US", "Central US"]
   }
   ```

#### Assigning Values to Variables
Values can be assigned to variables from various sources, in the following order of precedence (highest to lowest):

1. **Environment Variables**
   Set environment variables using the `TF_VAR_` prefix. For example:
   ```sh
   export TF_VAR_location="West US"
   ```

2. **Terraform CLI `-var` option**
   Pass variables directly when running Terraform commands:
   ```sh
   terraform apply -var="location=Central US"
   ```

3. **Terraform `.tfvars` files**
   Create a `.tfvars` file (e.g., `terraform.tfvars`):
   ```hcl
   location = "North Europe"
   ```

4. **Variable Definitions in Configuration Files**
   Assign default values directly in the variable block, as shown in the examples above.

#### Using Variables
Once declared and assigned, variables can be used within Terraform configuration files using the `var.<variable_name>` syntax. For example:

```hcl
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = var.location

  tags = {
    Environment = "Production"
    Department  = "IT"
    Owner       = "admin"
  }
}
```

#### Examples of Each Variable Type with Azure Resource Group
1. **String**
   ```hcl
   variable "location" {
     type        = string
     description = "The location where the resource group will be created"
     default     = "East US"
   }
   ```

   ```hcl
   resource "azurerm_resource_group" "example" {
     name     = "example-resources"
     location = var.location
   }
   ```

2. **Number**
   ```hcl
   variable "tag_count" {
     type        = number
     description = "Number of tags to assign to the resource group"
     default     = 3
   }
   ```

   ```hcl
   output "tag_count" {
     value = var.tag_count
   }
   ```

3. **Boolean**
   ```hcl
   variable "enable_monitoring" {
     type        = bool
     description = "Enable or disable monitoring for the resource group"
     default     = true
   }
   ```

   ```hcl
   resource "azurerm_monitor_diagnostic_setting" "example" {
     name               = "example-diagnostic-setting"
     target_resource_id = azurerm_resource_group.example.id
     enabled            = var.enable_monitoring
   }
   ```

4. **List**
   ```hcl
   variable "tags" {
     type        = list(string)
     description = "List of tags to assign to the resource group"
     default     = ["environment:production", "department:IT", "owner:admin"]
   }
   ```

   ```hcl
   resource "azurerm_resource_group" "example" {
     name     = "example-resources"
     location = var.location

     tags = {
       Environment = element(var.tags, 0)
       Department  = element(var.tags, 1)
       Owner       = element(var.tags, 2)
     }
   }
   ```

5. **Set**
   ```hcl
   variable "allowed_locations" {
     type        = set(string)
     description = "Set of allowed locations for the resource group"
     default     = ["East US", "West US", "Central US"]
   }
   ```

   ```hcl
   resource "azurerm_resource_group" "example" {
     name     = "example-resources"
     location = var.location
     count    = contains(var.allowed_locations, var.location) ? 1 : 0
   }
   ```

These notes cover the essentials of Terraform variables, including their declaration, assignment, and usage, focusing on string, number, boolean, list, and set types with examples using Azure resource groups.