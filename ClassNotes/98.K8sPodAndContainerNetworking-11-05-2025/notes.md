# 🔗 **Container-to-Container Networking (Same Pod)**

* Multiple containers can run inside a **single pod**.
* These containers **share the same network namespace**:

  * Same IP address.
  * Same `localhost` (127.0.0.1).
* This means:

  * One container can access another container using `localhost:<port>`.
* ✅ No need for service, DNS, or external IPs.
* 🧠 Think of it like two apps running on the same machine using different ports.

**Example**:
Container A (nginx) on port 80
Container B (sidecar logger) can access nginx via `http://localhost:80`

---

### 🌐 **Pod-to-Pod Networking (Same or Different Nodes)**

* Each pod in Kubernetes gets its own unique **IP address**.
* One pod can talk to another **directly via Pod IP**.
* Works **across nodes** as well, thanks to Kubernetes CNI (Container Network Interface).
* ✅ No NAT (Network Address Translation) — flat network.
* ❗ However, **Pod IPs can change** if pods restart.

**Example**:
Pod A wants to talk to Pod B (with IP `10.244.1.23`):
Use `http://10.244.1.23:<port>`

---

### 📝 Summary Table

| Type                   | Shared IP? | Communication Method     | Use `localhost`? |
| ---------------------- | ---------- | ------------------------ | ---------------- |
| Container-to-Container | ✅ Yes      | `localhost:<port>`       | ✅ Yes            |
| Pod-to-Pod             | ❌ No       | `http://<pod-ip>:<port>` | ❌ No             |
