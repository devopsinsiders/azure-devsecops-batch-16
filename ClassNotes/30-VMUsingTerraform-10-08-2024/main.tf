resource "azurerm_public_ip" "pip" {
  name                = "zelectric-vm-pip"
  resource_group_name = "rg-zelectric"
  location            = "westeurope"
  allocation_method   = "Static"
}

data "azurerm_subnet" "frontend_subnet" {
  name                 = "frontend-subnet"
  virtual_network_name = "vnet-zelectric"
  resource_group_name  = "rg-dev-zelectric"
}

resource "azurerm_network_interface" "nic" {
  name                = "zelectricvm-nic"
  location            = "westeurope"
  resource_group_name = "rg-zelectric"

  ip_configuration {
    name                          = "dhondhuips"
    subnet_id                     = data.azurerm_subnet.frontend_subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}

resource "azurerm_linux_virtual_machine" "vm" {
  name                            = "zelectricvm"
  resource_group_name             = "rg-zelectric"
  location                        = "westeurope"
  size                            = "Standard_F2"
  admin_username                  = "devopsadmin"
  admin_password                  = "P@ssw01rd@123"
  disable_password_authentication = false
  network_interface_ids           = [azurerm_network_interface.nic.id]

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
}

