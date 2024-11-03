variable "location" {
  type = string
}

resource "azurerm_resource_group" "rg" {
  count    = var.create_rg ? 1 : 0
  name     = "rg-dhondhu"
  location = "eastus"
}

resource "azurerm_storage_account" "stg" {
  name                     = "dhondhustg"
  resource_group_name      = azurerm_resource_group.rg[0].name
  location                 = var.location == null ? azurerm_resource_group.rg[0].location : var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}


# condition(true/false) ? true_val: false_val
