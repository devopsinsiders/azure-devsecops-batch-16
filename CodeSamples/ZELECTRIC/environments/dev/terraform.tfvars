rgs = {
  rg1 = {
    name     = "rg-dev-zelectric"
    location = "westeurope"
  }
}

vnets = {
  vnet1 = {
    name                = "vnet-zelectric"
    resource_group_name = "rg-dev-zelectric"
    location            = "westeurope"
    address_space       = ["10.0.0.0/16"]
  }
}

subnets = {
  subnet1 = {
    name             = "frontend-subnet"
    rg_name          = "rg-dev-zelectric"
    vnet_name        = "vnet-zelectric"
    address_prefixes = ["10.0.1.0/24"]
  }
  subnet2 = {
    name             = "backend-subnet"
    rg_name          = "rg-dev-zelectric"
    vnet_name        = "vnet-zelectric"
    address_prefixes = ["10.0.2.0/24"]
  }
}
