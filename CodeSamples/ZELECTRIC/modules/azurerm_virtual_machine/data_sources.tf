data "azurerm_key_vault" "kv" {
  name                = "Myvault122"
  resource_group_name = "Test_resource"
}

data "azurerm_key_vault_secret" "username" {
  name         = "vmusername"
  key_vault_id = data.azurerm_key_vault.kv.id
}

data "azurerm_key_vault_secret" "password" {
  name         = "vmpassword"
  key_vault_id = data.azurerm_key_vault.kv.id
}