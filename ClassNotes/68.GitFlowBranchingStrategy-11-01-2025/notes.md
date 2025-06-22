# 🧱 **Azure + Terraform Infrastructure Pipeline**

This part outlines how to manage infrastructure (VMs, databases, etc.) using Terraform and deploy it via a CI/CD pipeline in Azure.

### 🧩 Key Components:

* **Linux AD/Entra ID** integrated into pipeline for identity/auth
* **Infrastructure as Code (IaC)**: using **Terraform**
* **Pipeline** automates provisioning of:

  * VMs (Dev, QA, Prod)
  * Networking
  * DB, RG (Resource Groups)

---

## 🌐 **Application Pipeline (In Progress)**

Describes a **frontend or backend application deployment flow**:

### 🔁 Flow:

1. `git clone`
2. `npm install` – Installs dependencies
3. `npm run build` – Builds production-ready app
4. **Deploy to Azure VM**
5. Generate **artifacts**
6. Analyze code with **SonarQube**

---

## 🌳 **Branching Strategies**

### 🔹 **Trunk-Based Branching Strategy**

* Focused on **short-lived branches**
* All code merges quickly into `main`
* Used heavily with **Terraform Infrastructure Code**

| Branch              | Description                             |
| ------------------- | --------------------------------------- |
| `main`              | Long-lived, production-ready            |
| `feature/*`         | Short-lived, per-feature implementation |
| `dev`, `qa`, `prod` | Environment-specific deployments        |

> Example:

```plaintext
main → Production Infra
feature/rg → Resource Group Code
feature/vm → Virtual Machine Code
feature/db → DB Infra Code
```

---

### 🔹 **Git Flow Branching Strategy**

Structured branching for **Application Code**, more complex than trunk-based.

| Branch      | Purpose                            |
| ----------- | ---------------------------------- |
| `main`      | Production-ready code              |
| `develop`   | Integration branch (pre-prod)      |
| `feature/*` | New features or tasks              |
| `release/*` | Preparation for production release |
| `hotfix/*`  | Urgent fixes to production         |

> Visual markers:

* DEV ENV → commits: `C1`, `C2`, `C3` …
* QA and PROD have their own commit timelines (`c8`, etc.)

---

## 🛠️ **Terraform Infrastructure Flow (Environment-wise)**

| Environment | Target  |
| ----------- | ------- |
| dev         | DEV VM  |
| qa          | QA VM   |
| prod        | PROD VM |

* Uses environment-specific configurations
* `main` holds final validated Terraform code

---

## 📦 **Artifacts & Tools**

| Tool/Concept  | Description                          |
| ------------- | ------------------------------------ |
| **SonarQube** | Static code analysis tool            |
| **Artifacts** | Generated binaries/files after build |
| **Azure VM**  | Target for application deployment    |

---

## ✅ **Summary**

| Area                    | Approach                                  |
| ----------------------- | ----------------------------------------- |
| **Infra Pipeline**      | Terraform-based, trunk branching          |
| **App Pipeline**        | Node build process → Azure VM             |
| **Branching for Infra** | Trunk-based (main + short-lived features) |
| **Branching for App**   | Git Flow (main, develop, release, hotfix) |
| **SonarQube**           | Code quality scanner                      |
