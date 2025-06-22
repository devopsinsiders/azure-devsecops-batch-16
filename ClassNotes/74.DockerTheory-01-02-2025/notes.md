# 📌 **Batch 16-2 | Date: 01-02-2025**

---

## 🌐 **Architecture Evolution**

### 1️⃣ **One Tier Application (1990)**

* All components (Frontend, Backend, Database) are combined in a single codebase.
* Example: A desktop application where everything runs together.
* 🧑‍💻 **Users:** Initially designed for \~1000 users.

---

### 2️⃣ **Monolithic Three-Tier Architecture (2004)**

* **Tiers:**

  * **Frontend**: React, Angular, Next.js
  * **Backend**: Python, Java, .NET
  * **Database**: SQL Server, MySQL
* All components tightly coupled (Sab kuch juda hua hai).
* **Problems:**

  * A failure in one part can bring down the entire application.
  * Hard to scale specific components independently.
  * Computer restart time is high as everything is packaged together.

---

### 3️⃣ **Microservice Three-Tier Architecture (2011)**

* Each functionality (Cart, Accounts, Orders, Wishlist) is its own service.
* Each service runs on separate computers or VMs (2 GB or 4 GB allocated).
* **Microfrontends:** Frontend divided per functionality (Cart Frontend, Accounts Frontend, etc.).
* **Problems:**

  * Memory wastage as each service often over-allocates resources.
  * Restart time for services is high → Leads to higher downtime.

---

## ⚡ **Scalability**

* As user load increases (10,000 → 100,000 users), the number of computers (VMs) increases.
* Unit job size grows → More DevOps engineers needed to manage.

---

## 🏗 **Virtualization**

* **Setup:**

  * Hardware: 250 GB RAM, 40 core processor
  * Host OS → Hypervisor (e.g., VirtualBox)
  * Multiple VMs (each with Guest OS + Middleware + Code)
* **Problems:**

  * Guest OS in every VM causes memory wastage.
  * Restarting VMs takes significant time.
  * Inefficient use of hardware resources.

---

## 🐳 **Containerization**

* **Setup:**

  * Host OS → Linux Kernel (Ubuntu) + Docker/Podman/Rocket (container engine)
  * Containers share the OS kernel but run isolated environments.
* **Advantages:**

  * No Guest OS overhead → Efficient memory use.
  * Very fast startup/shutdown (Slim, Trim, Fast Restart).
  * Minimal downtime.
* **Linux Feature:**

  * **C-groups (Control groups):** Used to allocate CPU/memory to specific processes.

---

## ⚙ **Automation Tools**

* **Imperative:** az CLI → Commands define *how* to achieve a state.

* **Declarative:** Terraform, Bicep, ARM templates → Define *what* the end state should be, tool figures out *how*.

* **Usage Guidance:**

  * Small tasks → Automation like az CLI
  * Big tasks → Use Terraform, Bicep, ARM for better manageability

---

## 📦 **Containers & Operations**

* Build a package (image) containing middleware + code (e.g., nginx + app code).
* Example:

  * **Dev Team:** Creates Dockerfile with nginx 1.65 + code → Builds image.
  * **Ops Team:** Deploys the image → Easy version management (e.g., nginx 2.0 image).

---

## ✅ **Summary of Key Problems (Before Containerization)**

* Wastage of memory due to unnecessary overhead.
* High restart time → More downtime.
* Hard to scale specific components without scaling entire app/VM.
* More operational complexity → Higher demand for DevOps resources.

---

## 📝 **Final Takeaways**

👉 **Containerization** provides:

* Better resource utilization
* Faster deployments and scaling
* Easier management of microservices and microfrontends
* Lower operational cost and downtime

👉 **DevOps Tools:**

* Use **Imperative tools (az CLI)** for quick fixes or one-off tasks.
* Use **Declarative tools (Terraform, Bicep, ARM)** for managing large, complex environments consistently.
