module "rg_block" {
  source = "../ResourceGroup"
  rg_map = var.rg_details
}

module "storage_account_block" {
  depends_on  = [module.rg_block]
  source      = "../StorageAccount"
  storage_map = var.storage_details
}
