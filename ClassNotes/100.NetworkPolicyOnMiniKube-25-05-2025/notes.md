# 🛡️ **Kubernetes Network Policy in Minikube**

#### 📘 What is a Network Policy?

* A **NetworkPolicy** is a Kubernetes resource that controls traffic **to and from Pods**.
* It defines **rules** for ingress (incoming) and egress (outgoing) traffic based on labels, namespaces, and ports.
* It acts like a **firewall** at the Pod level.

#### 🧪 Example Use:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}  # selects all pods in the namespace
  policyTypes:
  - Ingress
```

This denies all ingress traffic to all pods in the namespace.

---

### ⚠️ Important Note on Minikube and Network Policy:

> 🟥 **Creating a NetworkPolicy does not guarantee it will be enforced.**

* Minikube runs on your local machine and **by default** it **does not include a Network Policy plugin** like Calico or Cilium.
* If your cluster does **not support network policies**, then even if you create a policy, it **won’t be enforced** — it just sits there doing nothing.

---

### ✅ How to Enable Network Policies in Minikube:

You need to start Minikube with a supported CNI (Container Network Interface) plugin like **Calico**:

```bash
minikube start --cni=calico
```

Once enabled:

* Kubernetes will enforce network policies correctly.
* You can test allow/deny rules between pods.

---

### 🧠 Summary:

| Feature            | Status without CNI | Status with CNI          |
| ------------------ | ------------------ | ------------------------ |
| NetworkPolicy YAML | ✅ Can be created   | ✅ Can be created         |
| Policy Enforcement | ❌ Not enforced     | ✅ Enforced               |
| Needs CNI plugin   | ❗ Yes              | ✔️ Installed like Calico |
