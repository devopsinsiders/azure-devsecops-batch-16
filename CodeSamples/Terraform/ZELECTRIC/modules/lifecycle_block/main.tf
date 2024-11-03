resource "azurerm_resource_group" "main" {
  name     = "bhondu-rg-123"
  location = "eastus"

  lifecycle {
    ignore_changes = [ tags ]
  }
}
