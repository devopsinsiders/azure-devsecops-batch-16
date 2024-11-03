resource "azurerm_resource_group" "main" {
  name     = "dhondhu-rg"
  location = "eastus"
}

output "mere_rg_ka_id" {
  value = azurerm_resource_group.main.id
}
