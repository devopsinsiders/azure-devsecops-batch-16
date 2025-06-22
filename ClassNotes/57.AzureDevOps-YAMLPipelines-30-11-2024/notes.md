# 📄 What is a YAML Pipeline in Azure DevOps?

A **YAML pipeline** is a way to define your CI/CD process using code (in `.yaml` format) in your repository.

---

### 🧱 Basic Structure of a YAML Pipeline

```yaml
trigger:
  - main  # Runs pipeline when code is pushed to 'main' branch

pool:
  vmImage: 'ubuntu-latest'  # Agent machine to run pipeline

steps:
  - task: UseDotNet@2
    inputs:
      packageType: 'sdk'
      version: '7.x.x'
    displayName: 'Install .NET SDK'

  - script: dotnet build
    displayName: 'Build the project'

  - script: dotnet test
    displayName: 'Run tests'
```

---

### 🧩 Key Components

| Section   | Description                                       |
| --------- | ------------------------------------------------- |
| `trigger` | Defines which branches will trigger the pipeline. |
| `pool`    | Defines the build agent (e.g., Ubuntu, Windows).  |
| `steps`   | List of tasks or scripts to run.                  |

---

### ✅ Common Use Case

* Compile code
* Run tests
* Deploy to a test or production environment

---

### 📌 File Location

Save the YAML file in the root of your repo as:
`azure-pipelines.yml`

