variable "vnets" {}

resource "azurerm_virtual_network" "vnet" {
  for_each            = var.vnets
  name                = each.value.dhondhu_name
  location            = each.value.location
  resource_group_name = each.value.resource_group_name
  address_space       = each.value.address_space

  dynamic "subnet" {
    for_each = each.value.dhondhu_subnets
    content {
      name             = subnet.value.name
      address_prefixes = subnet.value.address_prefixes
    }
  }
}
#note - for_each me jata hai set/map
#1. block ke naam ke aage likho dynamic
#2. block ke naam ko dalo "" me
#3. sb arguments ko utha ke content block me dalo
#4. content block ke upr ek for_each lga do...
