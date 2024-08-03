module "rg" {
  source     = "../../modules/azurerm_resource_group"
  rg_details = var.rgs
}

module "storage_account" {
  depends_on              = [module.rg]
  source                  = "../../modules/azurerm_storage_account"
  storage_account_details = var.storage_accounts
}

module "vnet" {
  source = "../../modules/azurerm_virtual_network"
  vnets  = var.vnets
}

module "subnets" {
  source = "../../modules/azurerm_subnet"
  subnets = var.snets
}
