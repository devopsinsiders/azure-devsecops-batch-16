# 🧱 **Kubernetes Architecture Overview**

Kubernetes follows a **master-worker (control plane-node)** architecture. It manages containerized applications across a cluster of machines (nodes), ensuring high availability, scalability, and reliability.

---

## 🎯 **Main Components**

### 🧠 1. **Control Plane (Master Node)**

The control plane makes **global decisions** about the cluster (e.g., scheduling), and **detects and responds** to cluster events.

#### Components:

* ### **kube-apiserver**

  * Acts as the **front-end (REST API server)** of the cluster.
  * All commands (e.g., from `kubectl`) interact here.
  * Validates and processes requests, talks to etcd, and updates cluster state.

* ### **etcd**

  * **Key-value store** to hold the entire state of the cluster.
  * Stores configuration data, secrets, status, etc.
  * Acts as Kubernetes' **database**.

* ### **kube-scheduler**

  * Assigns pods to nodes based on:

    * Resource requirements
    * Affinity/anti-affinity rules
    * Taints and tolerations
    * Node selectors and constraints

* ### **kube-controller-manager**

  * Runs multiple controllers (loops that manage cluster state):

    * Node Controller – Checks node health.
    * ReplicaSet Controller – Maintains desired number of pods.
    * Endpoint Controller – Updates services and endpoints.
    * Job Controller – Manages batch jobs.

* ### **cloud-controller-manager** *(optional, for cloud environments)*

  * Handles cloud provider-specific operations like:

    * Load balancer provisioning
    * Node management
    * Volume attachment

---

## ⚙️ **Node Components (Worker Nodes)**

Nodes are machines (VMs or physical) where application **containers run**.

#### Components:

* ### **kubelet**

  * Agent running on each node.
  * Ensures containers are running as per PodSpecs.
  * Communicates with the API server.

* ### **kube-proxy**

  * Manages network routing on the node.
  * Implements **service abstraction** using iptables or IPVS.
  * Handles traffic forwarding to the appropriate pod.

* ### **Container Runtime**

  * Software responsible for **running containers**.
  * Examples: **containerd**, **Docker**, **CRI-O**.

---

## 🔄 **Add-Ons (Optional but Useful)**

* **CoreDNS** – Internal DNS service to resolve service and pod names.
* **Metrics Server** – Collects resource usage data (CPU, memory).
* **Dashboard** – Web UI to manage the cluster.
* **Network Plugins (CNI)** – Configure networking between pods.

---

## 🕸️ **How It Works (Flow Example)**

1. User runs:
   `kubectl create -f pod.yaml`
2. **kube-apiserver** receives and stores the request in **etcd**.
3. **kube-scheduler** assigns a node to the pod.
4. **kubelet** on that node pulls the container image and starts the pod.
5. **kube-proxy** ensures network access to the pod/service.
6. Controllers constantly monitor and reconcile actual vs desired state.

---

## 🔐 **Security**

* Role-Based Access Control (RBAC)
* Network Policies
* Secrets and ConfigMaps
* Pod Security Standards

---

## 🧭 Diagram (Text Form)

```
           +-------------------------+
           |      kubectl/API       |
           +-----------+------------+
                       |
               +-------v--------+
               | kube-apiserver |
               +-------+--------+
                       |
       +---------------+----------------------------+
       |               |                            |
+------v-----+  +------v-------+     +--------------v----------------+
| etcd       |  | kube-scheduler|     | kube-controller-manager      |
+------------+  +--------------+     +------------------------------+

          Cluster State / Desired State Management

                            |
              +-------------+-------------------+
              |                                 |
    +---------v----------+           +----------v----------+
    |    Worker Node 1   |           |    Worker Node 2     |
    |--------------------|           |----------------------|
    | kubelet            |           | kubelet              |
    | kube-proxy         |           | kube-proxy           |
    | container runtime  |           | container runtime    |
    +--------------------+           +----------------------+

          Run Pods / Containers           Run Pods / Containers
```
