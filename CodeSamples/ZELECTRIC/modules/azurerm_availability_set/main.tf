variable "availability_set_name" {}
variable "location" {}
variable "rg_name" {}

resource "azurerm_availability_set" "availability_set" {
  name                = var.availability_set_name
  location            = var.location
  resource_group_name = var.rg_name
}
