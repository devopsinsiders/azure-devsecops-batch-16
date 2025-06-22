# 🛠️ **Azure Pipelines – Key Concepts and Structure**

This PDF offers an overview of Azure Pipelines with a mix of hierarchy explanation, examples, and keywords. Below is the organized breakdown of the content:

---

### 🔍 **Reference Tip**

> **To explore all syntax and options:**
> Search on Google → **"azure pipelines yaml reference"**

---

## 📐 **Pipeline Hierarchy (Structure)**

Azure Pipelines are built using a structured hierarchy. Here’s the breakdown:

### 1️⃣ **Pipeline**

* A pipeline consists of **one or more stages**.
* The top-level definition.

### 2️⃣ **Stage**

* A stage groups **one or more jobs**.
* Think of it as a phase (e.g., Build, Test, Deploy).

### 3️⃣ **Job**

* A job is a collection of **steps** that run sequentially.
* Each job runs on a single agent.

### 4️⃣ **Step**

* A step is a **task or script** that runs during a job.
* They are the smallest execution units.

---

## ⚙️ **Sample Shell Commands (Steps)**

```sh
echo "I am Dhondhu"
terraform init
terraform plan
terraform validate
```

These represent typical steps you may use inside a job (like initializing and validating Terraform code).

---

## 📦 **Pipeline with Steps**

This implies a **simple YAML pipeline** directly defining steps inside the pipeline (no explicit stages or jobs).

### 🧱 Components:

* `pool`: Defines the agent to run the job.
* `trigger`: Specifies when the pipeline should run.

  * Can be `none` or a list of branches.
* `steps`: Defines all the script/command steps.

#### Example (implied from PDF):

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: echo "I am Dhondhu"
  - script: terraform init
  - script: terraform plan
  - script: terraform validate
```

---

## 🧩 **Pipeline with Jobs and Implicit Stage**

* A pipeline **with jobs** automatically gets **one implicit stage** if you don't define any stages explicitly.
* This is useful when you're not organizing phases but want to group commands into jobs.

#### YAML Example:

```yaml
jobs:
- job: TerraformJob
  pool:
    vmImage: 'ubuntu-latest'
  steps:
    - script: echo "I am Dhondhu"
    - script: terraform init
    - script: terraform plan
    - script: terraform validate
```

---

## 🧠 **Terminology Notes**

| Term       | Meaning                               |
| ---------- | ------------------------------------- |
| `pipeline` | Overall CI/CD process                 |
| `stage`    | Phase in pipeline (e.g., build/test)  |
| `job`      | A group of steps, runs on 1 agent     |
| `step`     | Individual task or script             |
| `trigger`  | Defines conditions to start pipeline  |
| `pool`     | Agent pool to run jobs                |
| `demand`   | Advanced pool settings (custom needs) |

---

## ✅ Summary

* Azure Pipeline YAML is structured hierarchically.
* You can write a simple `pipeline` using just `steps`, or go advanced using `jobs` and `stages`.
* Key elements: `trigger`, `pool`, `steps`, `jobs`, `stages`.
* Refer to the **official Azure Pipelines YAML schema** for all features.
