terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.109.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "krish-rg" {
  name     = "krish-rg"
  location = "West Europe"
}