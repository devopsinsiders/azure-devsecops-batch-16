# Azure FrontDoor for Global Load Balancing

## Overview
Azure FrontDoor is a service that provides scalable and secure entry points for delivering global applications with high availability and low latency. When used in conjunction with Azure Application Gateway, FrontDoor can help optimize the delivery of your application across multiple regions.

## How It Works
FrontDoor works by routing traffic to the nearest Point of Presence (PoP) based on the user's location. It then uses Microsoft's global network to efficiently route the traffic to the closest backend servers hosting your application. This approach reduces latency and improves performance for end users.

## Integration with Application Gateway
When configured with Application Gateway, FrontDoor can direct traffic to the appropriate Application Gateway instances in different regions based on factors such as geographical location, latency, or specific routing rules. This allows you to deploy your application in multiple regions (e.g., East US and Central India) and have FrontDoor manage the global load balancing.

## Benefits
- 🌐 **Reduced Latency:** By routing traffic to the closest PoP and backend servers, FrontDoor reduces latency and improves the user experience.
- ⚡ **High Availability:** FrontDoor's global load balancing ensures that your application remains available even if one region or backend server goes down.
- 🔒 **SSL Offload:** FrontDoor can handle SSL/TLS termination, reducing the processing load on your backend servers and improving security.
- 🎛️ **Centralized Management:** FrontDoor provides a single point of management for global load balancing, simplifying the management of your application infrastructure.

## Conclusion
Azure FrontDoor, when combined with Azure Application Gateway, provides a powerful solution for delivering your applications globally with high availability, low latency, and enhanced security.

# Creating Azure FrontDoor Using Terraform

To create an Azure FrontDoor using Terraform, you need to define the FrontDoor resource in your Terraform configuration file (typically `main.tf`). Here's a basic example of how you can create an Azure FrontDoor using Terraform:

```hcl
provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "East US"
}

resource "azurerm_frontdoor" "example" {
  name                = "example-frontdoor"
  resource_group_name = azurerm_resource_group.example.name
  tags = {
    environment = "Production"
  }

  routing_rule {
    name                           = "example-routing-rule"
    frontend_endpoints_name        = azurerm_frontdoor.example.frontend_endpoints[0].name
    accepted_protocols             = ["Http", "Https"]
    patterns_to_match              = ["/*"]
    forwarding_protocol           = "MatchRequest"
    forwarding_timeout_milliseconds = 300
    forwarding_configuration {
      custom_forwarding_path = "/examplepath"
      backend_pool_name      = azurerm_frontdoor_backend_pool.example.name
    }
  }

  frontend_endpoints {
    name                      = "example-frontend"
    host_name                 = "example.azurefd.net"
    session_affinity_enabled = false
    session_affinity_ttl_seconds = 0
  }
}

resource "azurerm_frontdoor_backend_pool" "example" {
  name                = "example-backend-pool"
  resource_group_name = azurerm_resource_group.example.name
  load_balancing_settings {
    name                        = "example-lb-settings"
    sample_size                 = 4
    successful_samples_required = 2
  }
  backend {
    address                   = "backend1.azurewebsites.net"
    http_port                 = 80
    https_port                = 443
    priority                  = 1
    weight                    = 50
    enabled                   = true
  }
}
```

This example creates an Azure FrontDoor instance with a routing rule and a backend pool. Replace placeholder values (like `example-frontdoor`, `example.azurefd.net`, etc.) with your actual values. Make sure your Azure credentials are properly configured for Terraform to authenticate with Azure.