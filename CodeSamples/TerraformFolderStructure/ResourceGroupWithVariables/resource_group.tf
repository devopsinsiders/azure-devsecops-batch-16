resource "azurerm_resource_group" "rg1" {
  name     = var.rg_name
  location = var.rg_location
}

resource "azurerm_resource_group" "rg2" {
  name     = var.rg_name1
  location = var.rg_location1
}

resource "azurerm_resource_group" "rg3" {
  name     = var.rg_name2
  location = var.rg_location2
}

resource "azurerm_resource_group" "rg4" {
  name     = var.rg_name3
  location = var.rg_location3
}
