# 📌 **Batch 16-2 | Date: 26-01-2025**

### 📝 **Excel Sheet Structure**

* **Column: rg\_name**

  * Example: `rg-devopsinsiders`
* **Column: rg\_location**

  * Example: `westeurope`

---

### 📝 **Terraform `.tfvars` Sample**

```hcl
rgs = {
  rg1 = {
    rg_name     = ""
    rg_location = ""
  }
}
```

👉 This structure helps define resource groups dynamically.

---

### 📝 **PowerShell Variable Types**

✅ **Primitive**

* Integer
* String
* Boolean

✅ **Advanced**

* Array
* Queue
* Hashtable

---

### 📝 **PowerShell Array & Loop Example**

**Create an array:**

```powershell
$array = @("value1", "value2", "value3")
```

**Loop through array:**

```powershell
foreach ($item in $array) {
  Write-Output $item
}
```

---

### 💻 **Homework (HW) Task**

**Scenario:**
You have 5 storage accounts in your Azure subscription, located in different regions.

**Requirement:**

* Identify storage accounts located in `centralindia`.
* Generate an Excel report (`report.xlsx`) listing those accounts.

**Suggested Steps:**
1️⃣ Use PowerShell/Azure CLI to list storage accounts and their regions.
2️⃣ Filter for `centralindia`.
3️⃣ Export to Excel using `Export-Excel` (PowerShell module) or `Export-Csv`.

---

⚡ **Example PowerShell Snippet**

```powershell
$storageAccounts = Get-AzStorageAccount
$centralIndiaAccounts = $storageAccounts | Where-Object { $_.Location -eq 'centralindia' }
$centralIndiaAccounts | Select-Object StorageAccountName, Location | Export-Csv -Path "report.csv" -NoTypeInformation
```

