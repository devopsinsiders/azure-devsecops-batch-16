resource "azurerm_resource_group" "rg" {
  name     = "Tushar_Backend"
  location = "westeurope"
  tags = {
    app_code = "ABTR$#"
  }
}
