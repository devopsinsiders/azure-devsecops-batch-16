terraform {
  required_providers {
 azurerm = {
    source  = "hashicorp/azurerm"
    version = "3.110.0"
 }
  }
}

provider "azurerm" {
features {}
}

# Ye mera pehla pyara Resource group ka code hai....
resource "azurerm_resource_group" "rg_block1" {
name   = "rg-dev-wus-geneglobe"
 location = "West Europe"
}

