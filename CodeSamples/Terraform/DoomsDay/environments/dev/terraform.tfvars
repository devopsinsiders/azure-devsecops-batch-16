rg_map = {
  rg1 = {
    name     = "rg-dhondhu"
    location = "centralindia"
  }
  rg2 = {
    name     = "rg-tondu"
    location = "westeurope"
  }
}

st_map = {
  stg1 = {
    name                     = "bhondhustorage"
    resource_group_name      = "rg-tondu"
    location                 = "westeurope"
    account_tier             = "Standard"
    account_replication_type = "LRS"
  }
}
