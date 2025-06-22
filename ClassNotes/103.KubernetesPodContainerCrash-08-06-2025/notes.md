# 🧱 **Kubernetes Pod and Container – Notes**

#### 📌 What is a Pod?

* A **Pod** is the smallest deployable unit in Kubernetes.
* It can contain **one or more containers** (usually one).
* Containers inside a Pod **share the same network namespace**, and can communicate via `localhost`.

#### 🚀 What Happens if a Container Crashes?

* Each Pod has a **restart policy** (default: `Always`).
* If a container **crashes or exits**, the **Kubelet** on the node detects it and restarts the **container**, **not the whole Pod**.
* The **Pod remains the same** — only the failed container is restarted.

---

### 🔧 Example with **nginx**

Let's say you create a Pod with an **nginx** container:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx
```

Apply it:

```bash
kubectl apply -f nginx-pod.yaml
```

Now, check the container:

```bash
kubectl get pods
kubectl exec -it nginx-pod -- bash
```

Then kill the **nginx** process:

```bash
kill 1
```

* This command kills PID 1, which is the main nginx process inside the container.
* Kubernetes detects the crash and **automatically restarts** the nginx container.
* You can observe the restart count increasing:

```bash
kubectl get pod nginx-pod -o wide
```

Look for: `RESTARTS` column.

---

### 🧠 Summary

| Concept         | Explanation                                     |
| --------------- | ----------------------------------------------- |
| Pod             | Holds one or more containers                    |
| Container crash | Container is restarted by kubelet               |
| Pod restart     | **Not** restarted, only the container inside it |
| kill 1          | Kills main process of container (e.g. nginx)    |
| Restart count   | Increases on each crash and restart             |
