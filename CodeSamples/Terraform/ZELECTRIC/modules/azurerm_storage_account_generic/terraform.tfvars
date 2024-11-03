storage_account_details = {
  stg1 = {
    name                     = "dhondhustor1"
    location                 = "eastus"
    resource_group_name      = "rg-dhondhu"
    account_replication_type = "LRS"
  }
  stg2 = {
    name                = "dhondhustor2"
    location            = "westus"
    resource_group_name = "rg-dhondhu"
  }
}
