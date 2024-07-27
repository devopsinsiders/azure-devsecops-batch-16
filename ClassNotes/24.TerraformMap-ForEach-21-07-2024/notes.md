# Notes on Terraform Map and `for_each` with Example Code

## Terraform Map

A map in Terraform is a collection of key-value pairs, where each key is unique. Maps are useful for defining related sets of data that you can iterate over using constructs like `for_each`. In this example, we will look at how to use maps and the `for_each` construct to create multiple Azure resource groups and storage accounts.

**Example Code:**

```hcl
variable "rg_map" {
  type = map(any)
  default = {
    rg1 = "westeurope"
    rg2 = "centralindia"
    rg3 = "canadacentral"
  }
}

resource "azurerm_resource_group" "rgs" {
  for_each = var.rg_map
  name     = each.key
  location = each.value
}
```

**Explanation:**

1. **Variable Declaration:**
   - A variable `rg_map` of type `map(any)` is declared. The default value of this map contains three key-value pairs, each representing a resource group name and its corresponding location.

2. **Resource Group Creation:**
   - The `azurerm_resource_group` resource uses `for_each` to iterate over the map `var.rg_map`.
   - For each entry in the map:
     - `name` is set to the key of the map entry (e.g., `rg1`).
     - `location` is set to the value of the map entry (e.g., `westeurope`).

This will create three resource groups with the names and locations defined in the `rg_map`.

## Terraform `for_each` with Nested Maps

Terraform's `for_each` construct can also be used to iterate over nested maps. This is useful when creating resources with multiple properties.

**Example Code:**

```hcl
resource "azurerm_storage_account" "storage_accounts" {
  for_each = {
    dhondhustorage007 = {
      rg_name                  = "rg1"
      location                 = "westus"
      account_replication_type = "GRS"
    }
    dhondhustorage008 = {
      rg_name                  = "rg2"
      location                 = "centralindia"
      account_replication_type = "LRS"
    }
  }

  name                     = each.key
  resource_group_name      = each.value.rg_name
  location                 = each.value.location
  account_tier             = "Standard"
  account_replication_type = each.value.account_replication_type
}
```

**Explanation:**

1. **Resource Definition:**
   - The `azurerm_storage_account` resource uses `for_each` to iterate over a nested map, where each key is the name of the storage account and the value is a map containing the properties of the storage account.

2. **Resource Properties:**
   - `name` is set to the key of the map entry (e.g., `dhondhustorage007`).
   - `resource_group_name` is set to the `rg_name` property of the map value.
   - `location` is set to the `location` property of the map value.
   - `account_tier` is set to a constant value `Standard`.
   - `account_replication_type` is set to the `account_replication_type` property of the map value.

This will create two storage accounts with the names and properties defined in the map.

# Summary

- **Maps** in Terraform are useful for managing collections of related data.
- The `for_each` construct allows you to iterate over maps to create multiple resources.
- Using maps with `for_each` helps in managing and scaling your Terraform configurations efficiently, reducing repetition and improving readability.

These examples demonstrate how to use maps and `for_each` to dynamically create multiple resources with different properties in Terraform.