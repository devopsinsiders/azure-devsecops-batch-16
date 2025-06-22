## 🔐 Kubernetes Network Policy - Notes

### 🧠 What is a Network Policy?

* A **NetworkPolicy** is a Kubernetes resource that controls **network traffic** **between pods**, and **from/to pods**.
* It works at **Layer 3/4** (IP + TCP/UDP).
* Think of it like a **firewall rule** inside the Kubernetes cluster.

---

### 🛡️ Why Use Network Policies?

* To **restrict communication** between pods.
* Improve **security** by allowing **only necessary** traffic.
* By default, **all pods can talk to each other** → NetworkPolicy can **limit this**.

---

### ⚙️ Key Concepts

| Term                | Description                                 |
| ------------------- | ------------------------------------------- |
| `podSelector`       | Selects the pods this policy applies to     |
| `ingress`           | Rules for **incoming** traffic to the pod   |
| `egress`            | Rules for **outgoing** traffic from the pod |
| `namespaceSelector` | Select pods from other namespaces           |
| `ipBlock`           | Allow/Deny based on IP ranges (CIDR)        |

---

### 📦 Example Use Case:

> You have a frontend pod and backend pod. You want only frontend to talk to backend.

---

### 📝 Sample Network Policy YAML

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
```

👉 This means:

* Pods with label `app: backend` will **only accept traffic from** pods with label `app: frontend`.

---

### ⚠️ Important Notes

* **Network policies are enforced** only if the **CNI plugin supports it** (e.g., Calico, Cilium, Weave).
* **No policy = allow all** (default).
* **Once a policy is applied**, **only allowed traffic** can flow. All else is **denied**.
