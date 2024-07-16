### Creating Azure Resource Groups using Terraform Sets

#### 1. **Defining Variables**

Variables in Terraform allow you to parameterize your configurations. In this example, we define a set of resource group names.

```hcl
variable "rg_set" {
  description = "List of resource groups"
  type        = set(string)
  default     = ["rg1", "rg2", "rg3", "rg4", "rg5", "rg5", "rg1", "rg1", "rg1"]
}
```

- **Type**: We use `set(string)` to ensure that each value is unique and is treated as a string.
- **Default**: The default list includes several duplicate values which will be handled by the set type, resulting in unique resource groups.

#### 2. **Creating Resource Groups**

We use the `for_each` meta-argument to iterate over the unique values in the set and create a resource group for each value.

```hcl
resource "azurerm_resource_group" "example" {
  for_each = var.rg_set
  name     = each.key
  location = "West Europe"
}
```

- **for_each**: This allows us to iterate over each unique value in `var.rg_set`.
- **each.key**: Represents the current item in the set, which is used to assign the name to the resource group.

#### 3. **Outcome**

With the provided configuration, Terraform will create the following resource groups:

- `rg1`
- `rg2`
- `rg3`
- `rg4`
- `rg5`

Duplicates in the initial list are ignored because `set(string)` ensures each value is unique.

#### 4. **Additional Notes**

- **Location**: The location is hard-coded to "West Europe" for all resource groups. This can be parameterized if different locations are needed.
- **Uniqueness**: Using a set guarantees that only unique resource groups are created, even if the input list has duplicates.

This approach is efficient for scenarios where you want to ensure no duplicate resource groups are created and want to dynamically manage the resource groups based on an input list.