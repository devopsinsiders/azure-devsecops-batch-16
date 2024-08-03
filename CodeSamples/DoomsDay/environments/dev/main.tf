module "aman-rg" {
  source = "../../modules/resource_group"
  rg_map = var.rg_map
}

module "aman-storage" {
  depends_on = [module.aman-rg]
  source     = "../../modules/storage_account"
  st_map     = var.st_map
}
