# 🔧 **Azure DevOps & Terraform Integration Workflow**

### 💡 Overview

The document represents a practical Terraform-based infrastructure deployment process using Azure DevOps pipelines. It also emphasizes directory structure awareness and automation best practices.

---

## 🧩 Key Components in Diagram

### 🧱 1. **Terraform Workflow**

* **terraform init:** Initializes Terraform working directory.
* **terraform plan:** Creates an execution plan, showing what Terraform will do.
* **terraform apply:** Applies the changes required to reach the desired state.

### 🔁 Two Execution Scenarios:

#### ✅ **Run First Time:**

Path:
`_work/1/b → git clone → cd todoinfra → terraform init`

#### 🔁 **Second Time:**

Path:
`_work/9/s → git clone → cd todoinfra → terraform init`

Both represent pipeline agent workspaces executing Terraform commands in slightly different paths due to pipeline triggers.

---

## 💻 **Azure DevOps Agent Paths**

| Directory Name                   | Purpose                                      |
| -------------------------------- | -------------------------------------------- |
| `System.DefaultWorkingDirectory` | Default working directory for running tasks. |
| `Build.ArtifactStagingDirectory` | Path for output artifacts before publishing. |
| `Agent.ToolsDirectory`           | Contains tools installed on the agent.       |

---

## 🧪 Terraform Quality Gates

The process includes checks for quality and compliance:

1. **Tracking of Changes**

   * Keep track of changes to infrastructure with version-controlled code.

2. **tfsec Scan**

   * Security scanning for Terraform code. Detects misconfigurations.

3. **Terraform Lint & Validate**

   * Ensures code quality and syntax correctness before applying.

---

## 🧱 Infrastructure as Code Principles

* Everything is treated **"as code"**:

  * Resource definitions, execution steps, validation.
  * Stored in version control (e.g., Git).

* Use of **Terraform Modules** to promote reusability and structure.

---

## 🔄 Tools & Platform

* **Azure Portal** – Where infrastructure (like Resource Groups) is visible post-deployment.
* **Terraform** – Used for defining and provisioning infrastructure.
* **Azure DevOps** – CI/CD platform orchestrating the workflow.

---

## 🛠️ Legacy to Modern Naming

* **Old Name**: VSTS / TFS
* **New Name**: Azure DevOps

---

## 📝 Assignment Mentioned

> **Create a pipeline to start VMs that have the tag `autoschedule = true`**

This would likely involve:

* Using an Azure CLI or Terraform script that filters VMs by tag.
* Executing a `Start-AzVM` or similar command as part of the pipeline.
* Automating the logic via YAML pipeline or Azure Function.

---

## 💡 Summary

This document outlines a practical Azure DevOps pipeline for running Terraform scripts. It incorporates security scans, validation, reusability with modules, and makes use of standard DevOps agent directories. A focus on automation and everything-as-code approach is evident.
