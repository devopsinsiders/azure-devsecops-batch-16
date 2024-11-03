resource "azurerm_storage_account" "storage" {
  for_each                 = var.storage_map
  name                     = each.value.name
  location                 = each.value.location
  resource_group_name      = each.value.rg_name
  account_tier             = each.value.account_tier
  account_replication_type = each.value.replication_type
}
