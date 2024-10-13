### Dynamic Blocks in Terraform

Dynamic blocks in Terraform allow you to programmatically create repeated nested blocks within a resource based on input data, making it useful for managing configurations where the number of repeated blocks (like subnets or network interfaces) depends on variables or other input.

#### Components of a Dynamic Block

1. **`dynamic` Block**: The keyword `dynamic` tells Terraform that the block's content will be generated dynamically.
2. **`for_each`**: Specifies the collection (list, map, or set) over which Terraform will iterate to create multiple instances of the block.
3. **`content`**: Contains the actual block that will be repeated for each item in the `for_each` collection.

#### Example: Using a Dynamic Block for Subnets in a VNet

In this example, you are dynamically creating subnets in an Azure Virtual Network (VNet). The number and properties of the subnets are defined in a variable.

##### Variables File (`variables.tf`):

```hcl
variable "subnets" {
  type = list(object({
    name           = string
    address_prefix = string
  }))
  default = [
    {
      name           = "subnet1"
      address_prefix = "10.0.1.0/24"
    },
    {
      name           = "subnet2"
      address_prefix = "10.0.2.0/24"
    }
  ]
}
```

This variable defines a list of objects where each object represents a subnet with a name and an address prefix.

##### Main Terraform File (`main.tf`):

```hcl
resource "azurerm_virtual_network" "vnet" {
  name                = "my-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = "East US"
  resource_group_name = "my-resource-group"

  dynamic "subnet" {
    for_each = var.subnets
    content {
      name           = subnet.value.name
      address_prefix = subnet.value.address_prefix
    }
  }
}
```

#### Explanation:

- **`dynamic "subnet"`**: This creates dynamic subnet blocks inside the `azurerm_virtual_network` resource.
- **`for_each = var.subnets`**: This tells Terraform to iterate over the `var.subnets` list and create a `subnet` block for each item in the list.
- **`subnet.value.name` and `subnet.value.address_prefix`**: These references pull the `name` and `address_prefix` from the current iteration of the list to dynamically fill in the properties of each subnet block.

This dynamic block will generate the following equivalent configuration during runtime:

```hcl
resource "azurerm_virtual_network" "vnet" {
  name                = "my-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = "East US"
  resource_group_name = "my-resource-group"

  subnet {
    name           = "subnet1"
    address_prefix = "10.0.1.0/24"
  }

  subnet {
    name           = "subnet2"
    address_prefix = "10.0.2.0/24"
  }
}
```

### Benefits of Dynamic Blocks:
1. **Reduces Code Duplication**: Instead of manually writing each block, dynamic blocks let you create multiple instances programmatically.
2. **Flexibility**: The number of blocks created can easily change based on variable input or data sources.
3. **Maintainability**: Any updates to the input variables will automatically reflect in the dynamically generated blocks.

### Use Cases:
- Defining multiple subnets in a VNet, as shown above.
- Attaching multiple security rules to an Azure Network Security Group.
- Creating multiple block devices for an EC2 instance in AWS.

Dynamic blocks provide a flexible and clean way to handle repetitive configurations in Terraform, especially when the number of nested blocks is not static.