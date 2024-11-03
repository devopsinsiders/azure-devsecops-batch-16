terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.109.0"
    }
  }
}

provider "azurerm" {
  features {}
}


resource "azurerm_resource_group" "dhondhu_block1" {
  name     = "sallu-bhai"
  location = "West Europe"
}

resource "azurerm_resource_group" "dhondhu_block2" {
  name     = "sanju-bhai"
  location = "West Europe"
}



