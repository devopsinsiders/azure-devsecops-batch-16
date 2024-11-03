variable "rg_set" {
  description = "isme rg ki list dalo"
  type        = set(string)
  default     = ["rg1", "rg2", "rg3", "rg4","rg5", "rg5", "rg1", "rg1", "rg1"]
}

resource "azurerm_resource_group" "example" {
  for_each = var.rg_set
  name     = each.key
  location = "West Europe"
}
