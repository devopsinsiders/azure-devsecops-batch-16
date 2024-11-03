variable "rg_names" {
  type = list(string)
  default = ["rg1", "rg2", "rg3", "rg4"]
}

resource "azurerm_resource_group" "rgs" {
  for_each = toset(var.rg_names)
  name     = each.value
  location = "West Europe"
}
