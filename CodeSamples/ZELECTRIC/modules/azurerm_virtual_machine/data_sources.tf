# data "azurerm_key_vault_secret" "username" {
#   for_each     = var.vms
#   name         = each.value.username_key
#   key_vault_id = data.azurerm_key_vault.kv[each.key].id
# }

# data "azurerm_key_vault_secret" "password" {
#   for_each     = var.vms
#   name         = each.value.password_key
#   key_vault_id = data.azurerm_key_vault.kv[each.key].id
# }
