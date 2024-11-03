variable "rg_details" {
  type = map(
    object(
      {
        name       = string
        location   = string
        tags       = optional(map(string))
        managed_by = optional(string)
      }
    )
  )
}

resource "azurerm_resource_group" "resource_groups" {
  for_each = var.rg_details
  name     = each.value.name
  location = each.value.location
  tags     = each.value.tags
}

