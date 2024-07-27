resource "azurerm_resource_group" "rg1" {
  for_each = toset(["rg-dhondhu", "rg-tondu", "rg-pondu", "rg-pondu"])
  name     = each.key
  location = "West Europe"
  tags = {
    creation_time = plantimestamp()
    owner         = "Aman"
  }
}
