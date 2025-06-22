# 🌐 Azure Kubernetes Service (AKS) – Network Configuration & Policy

---

### 🔐 What is a Network Policy in Kubernetes?

* **Network Policies** control **inbound/outbound traffic** to/from pods based on **labels, namespaces, IPs, and ports**.
* Acts like a **firewall** at the pod level.
* They **do not apply by default** – must be explicitly created.
* Requires a **network plugin** that supports policies (like **Azure CNI + Calico**).

---

### 🧠 Network Configuration Options in AKS

AKS supports two main networking models:

#### 1. **Azure CNI (Container Networking Interface)**

* Each pod gets an **IP from the Azure VNet**.
* Pods can communicate with Azure resources directly.
* Enables **advanced networking** like:

  * VNet peering
  * Private endpoints
  * Network security groups (NSGs)

##### ➕ Pros:

* Pod-to-Azure resource access is easier.
* Integration with Azure’s native networking.

##### ➖ Cons:

* Consumes **IP addresses rapidly**.
* Slightly more complex setup.

---

#### 2. **Kubenet**

* Lightweight network plugin.
* Pods get **IP from an internal address space**, and traffic is **NAT’ed**.
* Nodes use Azure VNet IPs.

##### ➕ Pros:

* IP-efficient.
* Simpler, great for small clusters.

##### ➖ Cons:

* Less Azure integration.
* No direct pod-to-Azure communication without special setup.

---

### 🧱 Azure Node Subnet

* When using **Azure CNI**, the **node subnet** is a subnet in your VNet assigned to **AKS agent nodes**.
* From this subnet:

  * Each node gets a VM IP.
  * Pod IPs are also assigned (reserved based on `maxPodsPerNode` setting).
* Ensure this subnet has enough IPs:

  ```
  IPs needed = (#nodes × maxPodsPerNode) + buffer
  ```

---

### 🦊 Calico in AKS

* **Calico** is an open-source **network policy engine** and **network provider**.
* It enables:

  * **Enforcing Network Policies**
  * **Pod-level security** using policies
  * **IP-in-IP** encapsulation or **BGP routing**
  * Supports **NetworkPolicy** and **GlobalNetworkPolicy**.

#### ✅ When is Calico used in AKS?

* Used **with Azure CNI** to implement network policies.
* Installed by default if you enable **network policy** at cluster creation.

---

### ✅ Enabling Network Policies in AKS

To use network policies:

1. Must **enable at cluster creation time**:

   ```bash
   az aks create \
     --name myAKSCluster \
     --resource-group myResourceGroup \
     --network-plugin azure \
     --network-policy calico
   ```

2. Create a network policy YAML:

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: NetworkPolicy
   metadata:
     name: allow-nginx
     namespace: default
   spec:
     podSelector:
       matchLabels:
         app: nginx
     ingress:
     - from:
       - podSelector:
           matchLabels:
             access: allowed
   ```

---

### 📌 Summary Table

| Feature          | Azure CNI      | Kubenet         |
| ---------------- | -------------- | --------------- |
| Pod IPs in VNet  | ✅ Yes          | ❌ No (NAT’ed)   |
| Azure NSG usable | ✅ Yes          | ⚠️ Partial      |
| Network Policies | ✅ With Calico  | ❌ Not supported |
| IP Usage         | High           | Low             |
| Pod scaling      | Limited by IPs | Flexible        |
