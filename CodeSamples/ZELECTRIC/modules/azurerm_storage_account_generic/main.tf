variable "storage_account_details" {
  type = map(object(
    {
      name                     = string
      location                 = string
      resource_group_name      = string
      account_replication_type = optional(string, "GRS")
    }
  ))
}

resource "azurerm_storage_account" "storage_accounts" {
  for_each                 = var.storage_account_details
  name                     = each.value.name
  location                 = each.value.location
  resource_group_name      = each.value.resource_group_name
  account_tier             = "Standard"
  account_replication_type = each.value.account_replication_type
  network_rules {
    default_action = "Deny"
    ip_rules       = ["49.43.6.117"]
  }
}
