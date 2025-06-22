# ⚡ PowerShell Overview

### 🔹 What is PowerShell?

* A powerful command-line shell and scripting language.
* Available on **Windows** by default.
* Can also be installed on **Linux** (cross-platform).

> 🪟 PowerShell = Kali window jisme command chalti hai

---

## 📁 File & Folder Management Commands

| Task              | PowerShell Command                                            |
| ----------------- | ------------------------------------------------------------- |
| Create Folder     | `New-Item -Path "C:\Path" -Name "Folder" -ItemType Directory` |
| Create File       | `New-Item -Path "C:\Path" -Name "file.txt" -ItemType File`    |
| Write to File     | `Set-Content -Path "file.txt" -Value "I love you!"`           |
| Copy File         | `Copy-Item -Path "src" -Destination "dst"`                    |
| Move File         | `Move-Item -Path "src" -Destination "dst"`                    |
| Delete File       | `Remove-Item -Path "file.txt"`                                |
| Delete Folder     | `Remove-Item -Recurse -Path "folder"`                         |
| Current Username  | `$env:USERNAME`                                               |
| Current Directory | `Get-Location`                                                |
| Change Directory  | `Set-Location`                                                |

---

## 🧾 File Content Search (like Ctrl+F)

| Task                    | PowerShell Equivalent                 |
| ----------------------- | ------------------------------------- |
| Find in files           | `Select-String` (like `grep`)         |
| Case insensitive search | `Select-String -CaseSensitive:$false` |

---

## 🖥️ File Editor Commands (Linux Syllabus Style)

| Action        | Linux Command |
| ------------- | ------------- |
| Create file   | `touch`       |
| Create folder | `mkdir`       |
| Read file     | `cat`         |
| Delete file   | `rm`          |
| Move/Rename   | `mv`          |
| Delete folder | `rm -r`       |
| Clear screen  | `clear`       |

---

## 🛠️ PowerShell Script File

* Extension: `.ps1`
* A sequence of PowerShell commands written in a file.
* Execute via PowerShell terminal:

  ```powershell
  .\script.ps1
  ```

---

## 💼 PowerShell Use Cases in DevOps

### 🔧 Infra as Code: `tfvars` File Generation

* Excel → tfvars via **PowerShell scripting**
* Chatbot → tfvars automation

### 🔔 Pipeline Notifications

* Send alerts to **Teams/Slack** when a pipeline **fails or passes**
* Advanced: Fail messages + auto GPT solution sharing

### 📦 Storage Account Reporting

* Identify storage accounts without **encryption**
* Scheduled script to **delete data older than 6 months**

### 🖥️ VM Management

* Check VM **health/status** regularly
* Auto-remediate or **resize underutilized VMs** (e.g., <30% usage)

### 🔄 Data Migration

* Between:

  * Two Azure Storage Accounts
  * Azure Storage Account ↔️ S3 bucket

### 🤖 Azure DevOps Agent Health

* Auto-restart agents if found **inactive**

### 🧍 User Onboarding/Offboarding

* Automate:

  * Subscription access
  * AD/Entra ID provisioning
  * Removing users and emailing: *"You are fired..."*

### 💾 SQL DB Automation

* Backup & restore via scripts

### 🏷️ Reporting via Tags

* Extract Azure reports based on resource **tags**

### ✅ Daily Checks

* Website SSL **certificate monitoring**
* Daily health check + reporting

---

## 🧠 Real-World Scripting Advice

> **"Har chiz ko pehle manually karke dekho, agar chal jaaye toh pipeline me ghusa do."**

→ First test manually → then automate via script or Azure Pipeline.

---

## 📌 Azure DevOps Notes

* **Custom tasks** can be created using PowerShell.
* Useful for:

  * Notifications
  * TFVars generation
  * Infra audits

---

## 🔚 Summary Table

| Category           | Use Cases                                               |
| ------------------ | ------------------------------------------------------- |
| File Ops           | Create, copy, move, delete files/folders                |
| DevOps Automation  | Infra reporting, alerts, backup, VM tuning              |
| Script Extension   | `.ps1`                                                  |
| Scripting Platform | PowerShell on Windows & Linux                           |
| Azure Integrations | DevOps agent control, pipeline tasks, tfvars generation |

