variable "rg_map" {
  type = map(any)
  default = {
    rg1 = "westeurope"
    rg2 = "centralindia"
    rg3 = "canadacentral"
  }
}

resource "azurerm_resource_group" "rgs" {
  for_each = var.rg_map
  name     = each.key
  location = each.value
}

