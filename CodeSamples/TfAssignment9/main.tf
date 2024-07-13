terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.110.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "pkrg"                   # Can be passed via `-backend-config=`"resource_group_name=<resource group name>"` in the `init` command.
    storage_account_name = "mystorage12345126"      # Can be passed via `-backend-config=`"storage_account_name=<storage account name>"` in the `init` command.
    container_name       = "pkcontainer"            # Can be passed via `-backend-config=`"container_name=<container name>"` in the `init` command.
    key                  = "anuj.terraform.tfstate" # Can be passed via `-backend-config=`"key=<blob key name>"` in the `init` command.
  }
}


provider "azurerm" {
  features {
    resource_group {
      prevent_deletion_if_contains_resources = true
    }
  }
}

resource "azurerm_resource_group" "resource_group" {
  name     = "rg-dev-weu-geneglobe"
  location = "West Europe"
}

resource "azurerm_resource_group" "resource_group1" {
  name     = "rg-dev-weu-geneglobe1"
  location = "West Europe"
}





