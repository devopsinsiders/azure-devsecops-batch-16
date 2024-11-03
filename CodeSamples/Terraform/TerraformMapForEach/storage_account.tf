resource "azurerm_storage_account" "storage_accounts" {
  for_each = {
    dhondhustorage007 = {
      rg_name                  = "rg1"
      location                 = "westus"
      account_replication_type = "GRS"
    }
    dhondhustorage008 = {
      rg_name                  = "rg2"
      location                 = "centralindia"
      account_replication_type = "LRS"
    }
  }

  name                     = each.value.ramu_name
  resource_group_name      = each.value.rg_name
  location                 = each.key
  account_tier             = "Standard"
  account_replication_type = each.value.account_replication_type
}

