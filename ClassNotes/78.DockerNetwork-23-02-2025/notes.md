# 🚀 **Docker Networking — Batch 16-2**

---

### 📌 **Docker Network Types**

✅ **Bridge**

* Default network driver for containers.
* Containers get a private IP and communicate via virtual bridge.

✅ **Host**

* Container shares host machine's network stack.
* No separate IP → Uses host's IP directly.

✅ **None**

* No networking for the container.
* Completely isolated from network.

✅ **macVLAN**

* Assigns a MAC address to a container.
* Makes the container appear as a physical device on the network.

✅ **Overlay**

* Used in Docker Swarm / multi-host networks.
* Enables communication between containers on different Docker hosts.

---

### 📌 **Basic Networking Concepts**

* **Devices:**
  Switch, Hub, Router
* **Router Example:** Airtel router provides IP addresses to devices (e.g., laptops, phones, servers).

---

### 📌 **Example IP Assignments**

* **Laptop:** 192.168.1.8
* **Phone (Galaxy S20+):** 192.168.1.4
* **Server:** Could be 192.168.1.6
* **Router:** Provides internal IPs like 192.168.1.x

---

### 📌 **Docker Bridge Network Example**

* Containers connected to `bridge` network:

  * `dhondhu-nginx`: 172.17.0.2
  * `firefox`: 172.17.0.3
  * `tondu-nginx`: 172.17.0.4
  * `apache`: 172.17.0.7

Each container can communicate with others via these internal IPs.

---

### 📌 **Ports & Access**

* **localhost:80** → Web service running on port 80.
* Map other ports like 8080, 9090 to access specific containers:

  ```
  localhost:8080
  localhost:9090
  ```
* Example:
  `192.168.1.8:9090` → Access container app exposed at port 9090 on laptop.

---

### 📌 **Nginx & Apache**

* **Nginx** default HTML directory: `/usr/share/nginx/html`
* **Apache** or custom apps: can serve from `/var/www/html`

---

## 💡 **Key Insights**

* Docker uses internal networking for container communication.
* You can map container ports to host ports for external access.
* Bridge network is most common for standalone Docker containers.
* Overlay network is essential for multi-node communication (Swarm).

