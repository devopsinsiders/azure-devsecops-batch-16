# 📘 **Azure Pipelines + Terraform – Complete Breakdown**

---

### 🧱 Pipeline Structures

The document outlines **three pipeline structures**, each offering increasing levels of abstraction and control:

---

### 🔹 **1. Pipeline with Steps**

A single pipeline file that runs all steps linearly.

```yaml
Pipeline1 - terraform-plan-apply-yaml-steps
File: tf-plan-apply.yml
```

Tasks:

* Terraform Init
* Terraform Plan
* Terraform Apply

💡 **Use case**: Basic setup for quick provisioning.

---

### 🔹 **2. Pipeline with Jobs**

Multiple jobs grouped for better control and separation.

```yaml
Pipeline2 - terraform-plan-apply-jobs
File: tf-plan-jobs.yml
```

#### 🔸 Job 1: Terraform Init and Plan

Steps:

* Terraform Init
* Terraform Plan

#### 🔸 Job 2: ManualApproval Job

* Pool: `server`
* Step: Manual validation

#### 🔸 Job 3: Terraform Apply Job

Steps:

* Terraform Init (again, to ensure fresh start)
* Terraform Apply

💡 **Use case**: Introduce approvals and clean separation between planning and applying.

---

### 🔹 **3. Pipeline with Stages**

A production-level approach using stages for better control, visibility, and structure.

```yaml
Pipeline3 - tf-plan-stages
File: tf-plan-stages.yml
```

#### 🔸 Stage: Terraform Init and Plan

* Job: Terraform Init and Plan

#### 🔸 Stage: Manual Validation

* Job: ManualApproval

#### 🔸 Stage: Terraform Apply

* Job: Terraform Apply

#### 🔸 Stage: Sanity

* Job: Sanity
  Steps:

  * Tfsec
  * Tfsec Lint

💡 **Use case**: Full-fledged production pipeline with security scanning, approvals, and modularity.

---

## 🏢 **Repository & Pipeline Mapping**

**Repository:** `az-tf-todo-infra`

* Pipelines:

  * `tf-plan-apply.yml`
  * `tf-plan-jobs.yml`
  * `tf-plan-stages.yml`

**Azure Pipelines Names:**

* terraform-plan-apply-yaml-steps
* terraform-plan-apply-jobs
* tf-plan-stages

---

## 🔄 **Branching & PRs**

* Main branch
* Feature branch: `feature/pradeep` and `feature/rana`
* PR integration happens via `tf-plan-stages.yml`

---

## 📚 **Assignments / Practical Scenarios**

### 📝 Assignment 1:

> If `nonprod` and `prod` use **different subscriptions**, how do you handle deployment?

**Hint:** Use pipeline conditions, parameterized service connections, or environment-specific YAML.

---

### 📝 Assignment 2:

> Create 4 parameters: `dev`, `test`, `qa`, `prod`, and deploy accordingly.

Use `parameters:` block in YAML and handle `if` conditions inside jobs.

---

### 📝 Assignment 3:

> Integrate `tflint` and `checkov` into pipeline

Example:

```yaml
- script: tflint .
- script: checkov -d .
```

---

### 📝 Assignment 4:

> Write a **Terratest test case** and integrate into the pipeline.

Steps:

* Write Go-based test in `tests/`
* Run via:

```yaml
- script: go test -v tests/
```

---

### 📝 Problem Statement:

> Current pipeline requires manually passing `dev` or `prod`. This is **painful**. We want:

* ✅ Automatic trigger based on branch
* ❌ No manual parameter input

💡 **Solution Direction**:

* Use branch-based triggers (e.g., trigger on `dev`, `prod` branches)
* Use branch name to infer environment in pipeline logic

---

## 📁 **Bonus: Pipeline Separation Suggestion**

To reduce complexity and increase automation:

* Use separate pipelines:

  * `dev-pipeline.yml`
  * `prod-pipeline.yml`
* Or, use a central pipeline that infers environment from Git branch.

---

## ✅ Summary

| Concept             | Description                                     |
| ------------------- | ----------------------------------------------- |
| **Steps**           | Basic linear execution                          |
| **Jobs**            | Grouped steps; allow approvals                  |
| **Stages**          | Organized pipeline phases; recommended for prod |
| **Manual Approval** | Done using server pool                          |
| **Security Tools**  | `tflint`, `checkov`, `tfsec`                    |
| **Automation Tip**  | Use Git branch names for environment detection  |
