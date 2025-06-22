# 📘 **Azure Kubernetes Service (AKS) - Notes**

---

### 🔹 **What is AKS?**

* **AKS** is a **managed Kubernetes service** provided by **Microsoft Azure**.
* It simplifies deploying, managing, and operating **Kubernetes (K8s)** clusters in Azure.
* Azure handles **control plane (master node)** for you (no cost), and you manage **worker nodes (agent nodes)**.

---

### 🔹 **AKS Architecture**

1. **Control Plane (Managed by Azure):**

   * Manages API server, scheduler, controller manager, etc.
   * Azure hosts and maintains high availability for the control plane.

2. **Node Pools (Managed by User):**

   * VM Scale Sets hosting the actual Kubernetes worker nodes.
   * You can create multiple node pools for different workloads (e.g., Linux and Windows).

3. **Kubernetes API Server Endpoint:**

   * Public or private (integrated with Azure VNet).

---

### 🔹 **Key Features**

* ✅ **Managed Control Plane**
* ✅ **Auto-scaling Node Pools**
* ✅ **Integrated with Azure DevOps & ACR (Azure Container Registry)**
* ✅ **Azure Monitor & Log Analytics support**
* ✅ **Integrated with Azure Active Directory (AAD)**
* ✅ **Support for Private Clusters**
* ✅ **Network Policy support**
* ✅ **GPU Node Support** for ML workloads

---

### 🔹 **How to Create AKS**

#### 🧱 Using Azure CLI:

```bash
az aks create \
  --resource-group myRG \
  --name myAKSCluster \
  --node-count 2 \
  --enable-addons monitoring \
  --generate-ssh-keys
```

#### 🧱 Using Portal:

1. Go to Azure Portal.
2. Search “Kubernetes Service”.
3. Click “+ Create”.
4. Fill in resource group, cluster name, node pool details.
5. Click “Review + Create”.

---

### 🔹 **kubectl with AKS**

* Connect your local `kubectl` to AKS using:

```bash
az aks get-credentials --resource-group myRG --name myAKSCluster
kubectl get nodes
```

---

### 🔹 **Important Integrations**

* 🔐 **Azure Active Directory (AAD)** – Role-based access control.
* 📦 **Azure Container Registry (ACR)** – For storing container images.
* 📈 **Azure Monitor** – For metrics, logs, and container insights.
* 🔐 **Azure Key Vault** – Secure secret management.
* 🔒 **Azure Network Policies** – Secure pod communication.

---

### 🔹 **Security Features**

* Network Policies
* Private Clusters
* Pod Identity (Azure AD integration for pods)
* RBAC (Role-Based Access Control)
* Secrets encryption using Azure Key Vault

---

### 🔹 **Networking Options**

* **Kubenet (basic)**: Simplified, auto-managed IPs.
* **Azure CNI (advanced)**: Full IP management via Azure VNet, better for enterprise scenarios.

---

### 🔹 **Scaling in AKS**

* **Manual scaling:** Use `az aks scale` or Portal.
* **Cluster AutoScaler:** Automatically adjusts node count.
* **Horizontal Pod Autoscaler (HPA):** Scales pods based on CPU/memory.

---

### 🔹 **Common AKS CLI Commands**

```bash
az aks list                  # List clusters
az aks delete                # Delete a cluster
az aks nodepool add          # Add a new node pool
kubectl get pods             # View running pods
kubectl describe pod <name>  # Get pod details
```

---

### 🔹 **Best Practices**

* Use **infrastructure-as-code** (e.g., Terraform, Bicep).
* Implement **network policies** for isolation.
* Use **private clusters** in production.
* Enable **auto-upgrade and patching**.
* Integrate with **Azure Monitor and Defender**.

---

### 🔹 **Use Cases**

* Microservices deployment
* Machine Learning model serving (with GPU nodes)
* Event-driven architecture
* CI/CD pipelines for containerized apps
* Hybrid cloud scenarios with Azure Arc

