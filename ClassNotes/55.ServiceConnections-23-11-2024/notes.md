# 📌 **What is a Service Connection?**

A **Service Connection** in Azure DevOps is a **secure connection** between Azure DevOps and an **external service** (like Azure, AWS, DockerHub, GitHub, etc.) to **enable deployments**, **builds**, and **resource management**.

---

### 🔐 **Why is it needed?**

* To **authenticate** Azure DevOps to other services.
* To allow **Pipelines** to deploy code to cloud platforms or interact with external tools.
* To **secure credentials** and manage access centrally.

---

### 🛠️ **Types of Service Connections**

1. **Azure Resource Manager (ARM)**

   * Most common for deploying to Azure.
   * Authenticates using:

     * **Service principal (automatic/manual)**
     * **Managed identity** (if running on Azure DevOps-hosted agents in Azure)

2. **GitHub / GitHub Enterprise**

   * For pulling code from GitHub repositories.
   * Uses OAuth or Personal Access Tokens (PAT).

3. **Docker Registry**

   * Used to push/pull container images from Docker Hub, Azure Container Registry, etc.

4. **AWS**

   * Uses AWS access key ID and secret key.

5. **Generic**

   * Supports any REST endpoint using basic auth or a token.

---

### 🔧 **How to Create a Service Connection (Azure Example)**

1. Go to **Project Settings** → **Service connections**.
2. Click **New service connection**.
3. Choose **Azure Resource Manager**.
4. Select authentication method:

   * **Automatic** (recommended – uses current signed-in user permissions)
   * **Manual** (you provide Subscription ID, Tenant ID, Client ID, and Secret)
5. Grant access permission to all pipelines (optional).
6. Click **Save**.

---

### 🔄 **Usage in YAML Pipelines**

```yaml
jobs:
- deployment: DeployToAzure
  environment: 'prod'
  strategy:
    runOnce:
      deploy:
        steps:
        - task: AzureWebApp@1
          inputs:
            azureSubscription: '<ServiceConnectionName>'
            appName: '<YourAppName>'
            package: '$(System.ArtifactsDirectory)/drop/*.zip'
```

---

### 🔐 **Security Tip**

* Only give access to **required pipelines/projects**.
* Use **least privilege** principle.
* Review **expiration dates** for secrets or tokens.

---

### 📝 Summary

| Feature    | Description                                  |
| ---------- | -------------------------------------------- |
| Purpose    | Secure connection to external services       |
| Common Use | Deploying to Azure/AWS, Docker registry etc. |
| Security   | Uses service principal/token/credentials     |
| Created By | Admin or Project Administrator               |
| Used In    | Pipelines, Releases, Deployment Environments |
