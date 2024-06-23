terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.108.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg-block-name" {
  name     = "chulbul-rg"
  location = "West Europe"
}

resource "azurerm_resource_group" "rg-block-bulbul" {
  name     = "bulbul-rg"
  location = "West Europe"
}
