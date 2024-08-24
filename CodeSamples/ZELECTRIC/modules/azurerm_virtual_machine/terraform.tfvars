vms = {
  vm1 = {
    subnet_name          = "default"
    virtual_network_name = "vnetsoni"
    resource_group_name  = "res-soni"
    nic_name             = "vm1-nic"
    location             = "centralus"
    vm_name              = "bhootiyavm1"
    size                 = "Standard_F2"
  }
  vm2 = {
    subnet_name          = "bhootiya_subnet"
    virtual_network_name = "vnetsoni"
    resource_group_name  = "res-soni"
    nic_name             = "vm2-nic"
    location             = "centralus"
    vm_name              = "bhootiyavm2"
    size                 = "Standard_F2"
  }
}
