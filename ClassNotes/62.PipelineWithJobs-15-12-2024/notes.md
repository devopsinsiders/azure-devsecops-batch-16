# 📘 **Azure Pipelines - Terraform-Based Workflow Summary**

This PDF illustrates how to define Azure Pipelines using both **step-based** and **job-based** YAML structures, specifically focused on **Terraform automation**.

---

## 🚀 **Pipeline Using Steps**

### 🧩 Structure

```yaml
trigger: none

pool: zelectric-pool  # Windows agent

steps:
  - task: 1 - Terraform Tool Installer
  - task: 2 - Terraform Init
  - task: 3 - Terraform Plan
  - task: 4 - Terraform Apply
```

### 🔧 Tools

* **Tool**: macOS (in context of a different scan command)
* **Command**: `mactfscan -f todoapp_infa/` (related to scanning or testing on macOS)

### 💡 Notes:

* All tasks run **on the same agent** (defined in the `pool`).
* Best suited for simpler pipelines where **stage and job separation is not needed**.
* Ideal when execution order is linear and doesn't need manual gates or conditional approval.

---

## 🛠️ **Pipeline Using Jobs**

This approach separates logical units into **distinct jobs**, which provides:

* **More control**,
* **Manual validations**,
* And **separation of environments or responsibilities**.

### 🔁 Pipeline Breakdown

#### 🔹 **trigger**

```yaml
trigger: none
```

#### 🔹 **Job 1 – Terraform Init and Plan**

```yaml
pool: zelectric-pool  # Windows

steps:
  1. Terraform Init
  2. Terraform Plan
```

#### 🔹 **Job 2 – Manual Approval**

```yaml
pool: server

steps:
  - Manual Validation step
```

This job uses a **server pool**, which implies **manual intervention** (manual approval or validation).

#### 🔹 **Job 3 – Terraform Apply**

```yaml
pool: zelectric-pool

steps:
  1. Terraform Init
  2. Terraform Apply
```

> `Terraform Init` is repeated here to ensure the Apply job runs in a fresh or approved environment.

---

## ✅ Comparison: Steps vs Jobs

| Feature             | Steps-Based Pipeline         | Jobs-Based Pipeline                    |
| ------------------- | ---------------------------- | -------------------------------------- |
| Execution Context   | Single agent                 | Can span multiple agents/pools         |
| Manual Intervention | Not possible                 | Can use manual approval jobs           |
| Isolation           | All steps share same context | Jobs run in isolation                  |
| Flexibility         | Limited                      | High – can define dependencies & gates |
| Use Case            | Simple workflows             | Complex workflows, approvals, gates    |

---

## 🔐 Real-World Use Cases (Terraform Context)

| Stage          | Tasks                                   |
| -------------- | --------------------------------------- |
| Initialization | `Terraform Init`                        |
| Planning       | `Terraform Plan`                        |
| Approval       | `Manual Approval Step` (in server pool) |
| Execution      | `Terraform Apply`                       |

---

## 🧠 Summary Notes

* Prefer **steps** when the pipeline is linear, simple, and self-contained.
* Use **jobs** when:

  * You need **manual approvals**
  * You want to **reuse agent pools**
  * You require **stage/job level isolation**
* For Terraform pipelines, always consider separating `Plan` and `Apply` to allow **review or approval** in between.
