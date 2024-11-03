locals {
  # Common Tags
  common_tags = {
    app_code    = var.app_code
    cost_center = var.cost_center
    environment = var.environment
    app_id      = var.app_id
  }
  # Resource Specific Tags
  st_tags = {
    brand = "adidas"
  }
  rg_tags = {
    size = "8UK"
  }
}

resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = var.location
  tags     = merge(local.common_tags, local.rg_tags)
}

resource "azurerm_storage_account" "stg" {
  name                     = var.st_name
  location                 = azurerm_resource_group.rg.location
  resource_group_name      = azurerm_resource_group.rg.name
  account_replication_type = "LRS"
  account_tier             = "Standard"
  tags                     = merge(local.common_tags, local.st_tags)
}

resource "azurerm_virtual_network" "vnet" {
  name                = "${var.rg_name}-vnet"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  address_space       = ["10.0.0.0/16"]
  tags                = local.common_tags
}
