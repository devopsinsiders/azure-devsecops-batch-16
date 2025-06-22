# 📘 **Introduction to Azure DevOps YAML Pipelines**

* YAML pipelines are **declarative** pipelines defined in a `.yml` file (typically `azure-pipelines.yml`).
* Unlike Classic UI-based pipelines, YAML pipelines are **version-controlled** and reside alongside your source code.
* YAML pipelines support **multi-stage CI/CD**, reusable templates, and conditional logic.

---

## 📁 **Basic Structure of a YAML Pipeline**

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: echo "Hello, world!"
    displayName: 'Run a one-line script'
```

### 🔍 Breakdown:

* `trigger`: Specifies which branches will trigger the pipeline.
* `pool`: VM image to run the job (`ubuntu-latest`, `windows-latest`, etc.).
* `steps`: Series of tasks or scripts to be executed.

---

## 🧱 **Pipeline Components**

### 1. **Triggers**

```yaml
trigger:
  branches:
    include:
      - main
      - dev
```

### 2. **Variables**

```yaml
variables:
  appName: 'myapp'
  buildConfig: 'Release'
```

### 3. **Stages**

```yaml
stages:
  - stage: Build
    jobs:
      - job: BuildJob
        steps:
          - script: dotnet build
```

### 4. **Jobs**

* A job is a collection of steps that run on the same agent.

```yaml
jobs:
  - job: TestJob
    steps:
      - script: echo "Running tests"
```

### 5. **Steps**

* Each job contains steps: tasks or scripts.

```yaml
steps:
  - task: UseDotNet@2
    inputs:
      packageType: 'sdk'
      version: '6.0.x'
```

---

## 🧪 **Common Tasks in YAML Pipelines**

### 🧰 Use Predefined Tasks

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: 'build'
    projects: '**/*.csproj'
```

### 🧪 Run Tests

```yaml
- task: DotNetCoreCLI@2
  inputs:
    command: 'test'
    projects: '**/*Tests.csproj'
```

### 📦 Publish Artifacts

```yaml
- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: 'drop'
```

---

## 🔄 **Templates and Reuse**

### Reuse with Templates

```yaml
# azure-pipelines.yml
stages:
- template: templates/build.yml
```

### Define Template File (`templates/build.yml`)

```yaml
parameters:
  - name: buildConfig
    default: 'Release'

jobs:
  - job: Build
    steps:
      - script: dotnet build --configuration ${{ parameters.buildConfig }}
```

---

## ⚙️ **Conditions and Expressions**

```yaml
- script: echo "This runs only on main"
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
```

---

## 🔐 **Secrets and Secure Files**

* Use Azure DevOps **variable groups** and **Key Vault** integration for secrets.
* Reference with `$(secretName)` in scripts.

---

## ✅ **Pipeline Best Practices**

* 🔁 **Use templates** for reuse and cleaner code.
* 📂 **Organize pipelines** into multiple files if complex.
* 🧪 **Lint/test YAML** with Azure DevOps YAML Validator.
* 🔐 Avoid hardcoding secrets — use secure variables.

---

## ✅ **Sample CI/CD Pipeline**

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'

stages:
- stage: Build
  jobs:
  - job: Build
    steps:
    - task: UseDotNet@2
      inputs:
        version: '6.0.x'
    - task: DotNetCoreCLI@2
      inputs:
        command: 'build'
        projects: '**/*.csproj'

- stage: Deploy
  jobs:
  - job: Deploy
    steps:
    - script: echo "Deploying app..."
```

---

## 🧭 Conclusion

Azure DevOps YAML pipelines are powerful, flexible, and ideal for modern CI/CD practices. They enable automation of builds, tests, deployments, and infrastructure provisioning in a **code-first** manner.
