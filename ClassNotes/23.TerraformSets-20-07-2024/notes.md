# Terraform Notes: List, Set, and For_each

## Variables

**List**
- A list in Terraform is an ordered collection of values identified by their index.
- Lists are useful when you need to maintain a specific order of items.
- Declaring a list variable in Terraform:

```hcl
variable "rg_names" {
  type    = list(string)
  default = ["rg1", "rg2", "rg3", "rg4"]
}
```
- Here, `rg_names` is a list of strings containing four resource group names.

## Set
- A set in Terraform is an unordered collection of unique values.
- Sets ensure that each item in the collection is unique and can be useful when the order of items is not important.
- Converting a list to a set can be done using the `toset` function.

## Resources

**For_each with toset**

- The `for_each` argument allows you to iterate over collections and create multiple resources based on the collection.
- The `toset` function is used here to convert the list `var.rg_names` into a set, ensuring unique and unordered values for iteration.

```hcl
resource "azurerm_resource_group" "rgs" {
  for_each = toset(var.rg_names)
  name     = each.value
  location = "West Europe"
}
```
- In this resource block, the `for_each` statement iterates over the set created from the `rg_names` list.
- `each.value` represents the current value from the set being iterated over.

# Explanation:

1. **Declaring the Variable:**
   - The variable `rg_names` is declared as a list of strings with default values `["rg1", "rg2", "rg3", "rg4"]`.

2. **Converting List to Set:**
   - The `toset` function is used to convert the list `var.rg_names` into a set, ensuring that each resource group name is unique and unordered.

3. **Iterating with for_each:**
   - The `for_each` argument is used in the `azurerm_resource_group` resource to iterate over the set of resource group names.
   - For each unique value in the set, a resource group is created with the name specified by `each.value` and located in "West Europe".

# Key Points:

- **List:** Ordered collection, allowing duplicate values.
- **Set:** Unordered collection of unique values, created here using `toset`.
- **for_each:** Iterates over collections, creating multiple resources based on the items in the collection.

This approach ensures that you can dynamically create multiple resources efficiently using Terraform's list, set, and for_each functionalities.