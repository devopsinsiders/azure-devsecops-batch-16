vnets = {
  vnet1 = {
    dhondhu_name                = "dhondhu_vnet"
    location            = "centralindia"
    resource_group_name = "dhondhu_rg"
    address_space       = ["10.0.0.0/16"]
  
    dhondhu_subnets = {
      snet1123 = {
        name             = "snet1"
        address_prefixes = ["10.0.1.0/24"]
      }
      snet24324 = {
        name             = "snet2"
        address_prefixes = ["10.0.2.0/24"]
      }
    }
  }

  vnet2 = {
    name                = "tondu_vnet"
    location            = "centralindia"
    resource_group_name = "dhondhu_rg"
    address_space       = ["10.1.0.0/16"]
    subnets = {
      snet1 = {
        name             = "tondu_subnet1"
        address_prefixes = ["10.1.1.0/24"]
      }
      snet2 = {
        name             = "tondu_subnet2"
        address_prefixes = ["10.1.2.0/24"]
      }
    }
  }
}


