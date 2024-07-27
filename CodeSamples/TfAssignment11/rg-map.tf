resource "azurerm_resource_group" "rgblock" {
  for_each = {
    rg-dhondhu = "West Europe"
    rg2-tondu  = "Central India"
    rg3-pondu  = "Canada Central"
  }
  name     = each.key
  location = each.value
}

resource "azurerm_storage_account" "storageblock" {
  for_each = {
    dhondhustorage = {
      name       = "mainhurajkumar"
      location   = "West Europe"
      rg_name    = "rg-dhondhu"
      tier       = "Standard"
      redundancy = "LRS"
    }
    pondustorage = {
      name       = "mainhupondulal"
      location   = "West Europe"
      rg_name    = "rg-pondu"
      tier       = "Standard"
      redundancy = "LRS"
    }
    tondustorage = {
      name       = "mainhubhoot"
      location   = "West Europe"
      rg_name    = "rg-tondu"
      tier       = "Standard"
      redundancy = "LRS"
    }
  }
  name                     = each.value.name
  location                 = each.value.location
  resource_group_name      = each.value.rg_name
  account_tier             = each.value.tier
  account_replication_type = each.value.redundancy
}
