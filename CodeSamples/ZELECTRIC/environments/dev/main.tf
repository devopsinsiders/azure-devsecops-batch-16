variable "vnets" {}
variable "rgs" {}
variable "subnets" {}
variable "vms" {}
variable "bastions" {}
variable "key_vaults" {}

module "rg" {
  source     = "../../modules/azurerm_resource_group"
  rg_details = var.rgs
}

module "key_vault" {
  depends_on = [module.rg]
  source     = "../../modules/azurerm_key_vault"
  key_vaults = var.key_vaults
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

module "availability_set" {
  source                = "../../modules/azurerm_availability_set"
  availability_set_name = "dhondu-set"
  location              = "centralus"
  rg_name               = "rg-dev-zelectric"
}

module "vms" {
  depends_on = [module.subnets, module.key_vault,module.availability_set]
  source     = "../../modules/azurerm_virtual_machine"
  vms        = var.vms
}

module "bastion" {
  depends_on = [module.subnets]
  source     = "../../modules/azurerm_bastion"
  bastions   = var.bastions
}




