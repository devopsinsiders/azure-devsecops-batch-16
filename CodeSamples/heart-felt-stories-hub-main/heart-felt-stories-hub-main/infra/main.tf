resource "azurerm_resource_group" "rg-soulcenter" {
  name     = "rg-soulcenter"
  location = "West Europe"
}

resource "azurerm_container_registry" "acr" {
  name                = "acr-soulcenter"
  resource_group_name = azurerm_resource_group.rg-soulcenter.name
  location            = azurerm_resource_group.rg-soulcenter.location
  sku                 = "Premium"
  admin_enabled       = false  
}

resource "azurerm_kubernetes_cluster" "aks-soulcenter" {
  name                = "aks-soulcenter"
  location            = azurerm_resource_group.rg-soulcenter.location
  resource_group_name = azurerm_resource_group.rg-soulcenter.name
  dns_prefix          = "aks-soulcenter"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_A2_v2"
  }
  identity {
    type = "SystemAssigned"
  }
}

