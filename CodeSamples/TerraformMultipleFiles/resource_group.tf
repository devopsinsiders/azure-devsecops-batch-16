resource "azurerm_resource_group" "rg-007" {
  name     = "rg-tf-jamesbond-1"
  location = "West Europe"
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-tf-jhansaram-1"
  location = "West Europe"
}

resource "azurerm_resource_group" "rg3" {
  name     = "rg-tf-jhansaram-2"
  location = "West Europe"
}