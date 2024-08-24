variable "vnets" {}
variable "rgs" {}
variable "subnets" {}

module "rg" {
  source     = "../../modules/azurerm_resource_group"
  rg_details = var.rgs
}

module "vnet" {
  depends_on   = [module.rg]
  source       = "../../modules/azurerm_virtual_network"
  vnet_details = var.vnets
}

module "subnets" {
  depends_on = [module.vnet]
  source     = "../../modules/azurerm_subnet"
  subnets    = var.subnets
}
