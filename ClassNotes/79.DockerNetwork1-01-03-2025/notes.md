# 🚀 **Docker Networking — Batch 16-2**

---

### 📌 **Docker Network Types**

✅ **Bridge Network (Default)**

* Containers get IPs like `172.17.x.x` (e.g., `nginx: 172.17.0.2`, `firefox: 172.17.0.4`)
* Internal communication between containers on the bridge.
* Example:

  ```
  docker run -d --network bridge --name perpendicular nginx
  docker run -d --network bridge --name definite firefox
  ```

✅ **Host Network**

* Containers share host network (e.g., `192.168.1.8`).
* No container IP — container uses host’s IP directly.
* Example:

  ```
  docker run -d --network host --name dhondhu-nginx nginx
  ```

✅ **None Network**

* No networking (completely isolated).
* Example:

  ```
  docker run -d --network none --name none-nginx nginx
  ```

✅ **macVLAN / ipvLAN**

* Assigns container an IP from the local LAN (e.g., `192.168.1.9`).
* Container behaves like a physical device on the network.

✅ **Overlay Network**

* For multi-host Docker (Swarm mode).
* Allows containers on different hosts to communicate (e.g., `Host1` + `Host2`).
* Example network: `172.17.0.0/16` for overlay.

---

### 📌 **Port Mappings**

* Ports (e.g., `3000`, `7000`, `8364`) on host can map to container ports for external access.
* Example: `192.168.1.8:3000` points to a container app exposed on that port.

---

### 📌 **Supporting Components**

* **Virtual NICs:** Bridge network connects containers via virtual NICs.
* **Router (e.g., Airtel):** Provides network for host + macVLAN containers.

---

## 💡 **Key Takeaways**

👉 Use `bridge` for default Docker networking.
👉 Use `host` for high-performance networking (no isolation).
👉 Use `none` to isolate a container from networking.
👉 Use `macVLAN` / `overlay` for advanced network setups.
