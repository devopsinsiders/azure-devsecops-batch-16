resource "azurerm_resource_group" "resource_groups" {
  for_each = var.rg_details
  name     = each.value.name
  location = each.value.location
}

