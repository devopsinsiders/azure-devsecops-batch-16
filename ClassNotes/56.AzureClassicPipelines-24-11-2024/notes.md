# 🔹 Azure DevOps Classic Pipelines – Overview

**Azure DevOps Classic Pipelines** refer to the visual (UI-based) way of creating CI/CD pipelines without using YAML. These pipelines use a **graphical designer** to define the build and release process, making it easier for beginners and for complex workflows.

---

## 🔸 Types of Classic Pipelines

1. **Build Pipelines (Classic Build)**

   * Used for Continuous Integration (CI)
   * Defined using tasks/stages
   * Outputs artifacts that can be consumed by release pipelines

2. **Release Pipelines (Classic Release)**

   * Used for Continuous Deployment (CD)
   * GUI-based environment setup (e.g., Dev, Test, Prod)
   * Artifact-based triggering
   * Supports approvals, gates, and manual interventions

---

## 🔸 Components of Classic Pipelines

### 1. **Tasks**

* Individual steps like build, test, deploy
* Can be pre-defined tasks (e.g., MSBuild, Publish Artifact)

### 2. **Phases / Stages**

* Logical grouping of tasks
* Can be parallel or sequential

### 3. **Artifacts**

* Output from build pipelines
* Used as input in release pipelines

### 4. **Environments**

* Represent deployment targets (Dev, QA, Prod)
* Support approvals, conditions, and gates

### 5. **Triggers**

* Build Trigger: CI, Scheduled
* Release Trigger: Artifact published, manual

### 6. **Approvals & Gates**

* Manual approvals before/after deployment
* Gates (e.g., REST call, query check) before moving to next stage

---

## 🔸 Key Features

* 🖱️ Drag-and-drop interface
* 👤 Role-based access control
* ⏱️ Scheduled builds and deployments
* 📦 Integration with artifact feeds
* 🛠️ Integration with testing tools and key vaults
* 📊 Built-in analytics and logs

---

## 🔸 Advantages

* No need to learn YAML syntax
* Easier to visualize complex multi-stage deployments
* Quick setup for teams unfamiliar with code-based pipelines

---

## 🔸 Disadvantages

* Less scalable and flexible than YAML pipelines
* Difficult to manage in source control (versioning)
* Microsoft recommends moving to YAML for new projects

---

## 🔸 Migration to YAML Pipelines

* Azure DevOps allows exporting some parts of classic pipelines to YAML
* YAML pipelines are stored as code, support PR validation, templates, and are better suited for modern DevOps practices

---

## ✅ When to Use Classic Pipelines

* Legacy projects already using classic
* Teams new to CI/CD
* Scenarios needing detailed approvals and gates UI
