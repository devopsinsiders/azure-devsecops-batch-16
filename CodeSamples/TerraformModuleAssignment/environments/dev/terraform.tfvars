rgs = {
  rg1 = {
    name     = "rg-devopsinsiders1"
    location = "westeurope"
  }
  rg2 = {
    name     = "rg-devopsinsiders2"
    location = "canadacentral"
  }
}

storage_accounts = {
  stg1 = {
    name                     = "devopsinsidersstorage"
    location                 = "westeurope"
    resource_group_name      = "rg-devopsinsiders1"
    account_replication_type = "LRS"
  }
}

vnets = {
  vnet1 = {
    name                = "vnet1"
    location            = "centralindia"
    resource_group_name = "rg-devopsinsiders"
    address_space       = ["10.0.0.0/16"]
  }
  vnet2 = {
    name                = "vnet1"
    location            = "centralindia"
    resource_group_name = "rg-devopsinsiders"
    address_space       = ["10.128.0.0/16"]
  }
}

snets = {
  snet1 = {
    name                 = "subnet-1"
    resource_group_name  = "rg-devopsinsiders"
    virtual_network_name = "vnet-1"
    address_prefixes     = ["10.0.1.0/24"]
  }
}
