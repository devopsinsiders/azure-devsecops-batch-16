variable "location" {}
variable "rg_name" {}
variable "lb_name" {}

resource "azurerm_public_ip" "pip" {
  name                = "${var.lb_name}-pip"
  location            = var.location
  resource_group_name = var.rg_name
  allocation_method   = "Static"
}

resource "azurerm_lb" "lb" {
  name                = var.lb_name
  location            = var.location
  resource_group_name = var.rg_name

  frontend_ip_configuration {
    name                 = "PublicIPAddress"
    public_ip_address_id = azurerm_public_ip.pip.id
  }
}

resource "azurerm_lb_backend_address_pool" "netflixpool" {
  loadbalancer_id = azurerm_lb.lb.id
  name            = "${var.lb_name}-netflixpool"
}


data "azurerm_network_interface" "vm1nic" {
  name                = "dhondhuvm-nic"
  resource_group_name = var.rg_name
}

data "azurerm_network_interface" "vm2nic" {
  name                = "tonduvm-nic"
  resource_group_name = var.rg_name
}

resource "azurerm_network_interface_backend_address_pool_association" "vm1assoc" {
  network_interface_id    = data.azurerm_network_interface.vm1nic.id
  ip_configuration_name   = "dhondhuips"
  backend_address_pool_id = azurerm_lb_backend_address_pool.netflixpool.id
}

resource "azurerm_network_interface_backend_address_pool_association" "vm2assoc" {
  network_interface_id    = data.azurerm_network_interface.vm2nic.id
  ip_configuration_name   = "dhondhuips"
  backend_address_pool_id = azurerm_lb_backend_address_pool.netflixpool.id
}

resource "azurerm_lb_probe" "netflixprobe" {
  loadbalancer_id = azurerm_lb.lb.id
  name            = "netflix-probe"
  port            = 80
}

resource "azurerm_lb_rule" "netflix_rule" {
  loadbalancer_id                = azurerm_lb.lb.id
  name                           = "NetflixRule"
  protocol                       = "Tcp"
  frontend_port                  = 80
  backend_port                   = 80
  frontend_ip_configuration_name = "PublicIPAddress"
  backend_address_pool_ids       = [azurerm_lb_backend_address_pool.netflixpool.id]
  probe_id                       = azurerm_lb_probe.netflixprobe.id
}
