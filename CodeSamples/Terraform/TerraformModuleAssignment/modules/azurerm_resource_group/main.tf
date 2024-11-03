module "common_tags" {
  source = "../common_tags"
  dept   = "blue"
  colour = "red"
}

resource "azurerm_resource_group" "resource_groups" {
  for_each = var.rg_details
  name     = each.value.name
  location = each.value.location
  tags = merge(
    module.common_tags.tags,
  )
}
