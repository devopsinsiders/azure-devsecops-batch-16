variable "create_rg" {
  type = bool
}

resource "azurerm_resource_group" "rg" {
  count    = var.create_rg ? 1 : 0
  name     = "rg-tony-${count.index+1}"
  location = "westus"
}
