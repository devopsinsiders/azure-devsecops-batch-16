rg_details = {
  rg1 = {
    name     = "dhondhurg"
    location = "westeurope"
  }
}

storage_details = {
  stg1 = {
    name             = "dhondhustorage"
    location         = "westeurope"
    rg_name          = "dhondhurg"
    account_tier     = "Standard"
    replication_type = "LRS"
  }
}
