module "rg" {
  source = "../ResourceGroup"
  rg_map = {
    rg1 = {
      name     = "test"
      location = "europe"
    }
  }
}

module "vnet" {
    source = "../VirtualNetwork"
}

module "subnet" {
    source = "../Subnet"
}

module "vm" {
    source = "../VirtualMachine"
}