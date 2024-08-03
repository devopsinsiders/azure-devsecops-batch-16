# Class Notes: Azure Virtual Networks and Subnets

#### Introduction to the Internet

**The Internet:**
- **Definition:** The internet is a global network of interconnected computers that communicate through standardized protocols (like TCP/IP).
- **Components:**
  - **ISPs (Internet Service Providers):** Provide access to the internet.
  - **Routers:** Direct traffic on the internet.
  - **Servers:** Host websites, applications, and data.
  - **Clients:** Devices (like PCs, smartphones) that access services on the internet.
- **IP Addresses:** Unique identifiers for devices on the internet.
- **Domain Names:** Human-readable addresses (e.g., www.example.com) that map to IP addresses.

**How the Internet Works:**
- **Data Packets:** Information sent over the internet is broken into small packets.
- **Routing:** Packets are routed from source to destination using routers.
- **Protocols:** Standard rules (like HTTP, FTP) govern data exchange.

---

#### Introduction to Azure Virtual Networks (VNets)

**Azure Virtual Network (VNet):**
- **Definition:** A logically isolated network in the Azure cloud, similar to a traditional network in an on-premises datacenter.
- **Purpose:** To securely connect Azure resources like VMs, databases, and web apps.

**Key Features of VNets:**
- **Isolation and Security:** Provides a secure environment for Azure resources.
- **Customization:** Allows configuration of IP address ranges, subnets, and routing.
- **Connectivity:** Enables connection to on-premises networks, other VNets, and the internet.

---

#### Creating and Configuring a VNet

**Steps to Create a VNet:**
1. **Log into Azure Portal.**
2. **Navigate to 'Virtual Networks'.**
3. **Click on 'Create'.**
4. **Define the VNet:**
   - **Name:** Give your VNet a unique name.
   - **Address Space:** Define the IP address range (CIDR block) for the VNet (e.g., 10.0.0.0/16).
   - **Resource Group:** Choose an existing resource group or create a new one.
   - **Region:** Select the Azure region where the VNet will be created.

**Subnets:**
- **Definition:** Sub-divisions within a VNet, used to segment the network logically.
- **Purpose:** To isolate resources for better management and security.
- **Creating Subnets:**
  - **Name:** Provide a name for the subnet.
  - **Address Range:** Define the IP range for the subnet (e.g., 10.0.1.0/24).

**Example Configuration:**
- **VNet Address Space:** 10.0.0.0/16
- **Subnets:**
  - **Subnet1:** 10.0.1.0/24
  - **Subnet2:** 10.0.2.0/24

### Summary

Azure VNets are fundamental for creating isolated, secure, and customizable network environments in the cloud. Understanding how to design, configure, and manage VNets and subnets is crucial for leveraging the full potential of Azure's networking capabilities.