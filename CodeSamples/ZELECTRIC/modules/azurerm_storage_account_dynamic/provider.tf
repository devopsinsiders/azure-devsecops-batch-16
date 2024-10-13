terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.5.0"
    }
  }
}

provider "azurerm" {
  # Configuration options
  features {}
  subscription_id = "79d1c89c-4c17-4799-bcc7-a90911821f92"
}
