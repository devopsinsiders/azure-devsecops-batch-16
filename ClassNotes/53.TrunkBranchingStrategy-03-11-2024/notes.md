### Trunk-Based Branching Strategy for Terraform Repositories

**Overview:**
Trunk-based development (TBD) is a software development approach where developers work on a single branch (usually called the "trunk") instead of multiple long-lived branches. This strategy encourages frequent integration, reduces merge conflicts, and promotes a more streamlined deployment process.

**Benefits of Trunk-Based Development:**
- Simplifies collaboration.
- Reduces integration issues.
- Encourages shorter-lived feature branches (if any).
- Enhances code quality through continuous feedback.
- Allows for faster delivery of features.

### Complete Process of Trunk-Based Development with Terraform

1. **Initial Setup:**
   - **Repository Structure:** Organize your Terraform code in a well-defined structure. Typically, this includes directories for modules, environments, and possibly separate directories for resources.
   - **Main Branch:** The main branch (often named `main` or `trunk`) should contain the most stable and production-ready code.

2. **Development Process:**
   - **Creating a Task:** Identify a new task, such as adding a new resource group (RG) in Azure.
   - **Local Development:**
     - **Create a New Branch (Optional):** While TBD encourages minimal branching, you can create a temporary branch for isolated work.
       ```bash
       git checkout -b add-new-rg
       ```
     - **Update Terraform Code:**
       - In your Terraform configuration, add the necessary code to create a new resource group.
         ```hcl
         resource "azurerm_resource_group" "example" {
           name     = "example-rg"
           location = "East US"
         }
         ```
     - **Local Testing:**
       - Run `terraform init` to initialize your Terraform configuration.
       - Run `terraform plan` to see the changes that will be applied.

3. **Integration with Main Branch:**
   - **Pull Request Creation:**
     - Once you’re satisfied with your changes, push your branch to the remote repository.
       ```bash
       git push origin add-new-rg
       ```
     - Create a pull request (PR) from your feature branch to the main branch.
     - In the PR, provide a clear description of what the change entails and any necessary context (e.g., why the RG is needed).

4. **Code Review Process:**
   - Collaborate with team members for a code review.
   - Reviewers should check for:
     - Code quality and adherence to best practices.
     - Terraform plan output to ensure no unintended changes are introduced.
     - Potential impacts on existing infrastructure.

5. **Merge to Main Branch:**
   - After receiving approvals and making necessary changes, merge your PR into the main branch.
   - If using GitHub, this typically involves clicking the "Merge" button after approvals.
   - Consider using "Squash and Merge" to keep commit history clean.

6. **Deploy Changes:**
   - After merging, run your CI/CD pipeline to apply the changes:
     - Set up automated pipelines using tools like GitHub Actions, Jenkins, or Azure DevOps to execute `terraform apply` after merges to the main branch.
   - Monitor the deployment for any issues and validate that the new resource group is created successfully.

7. **Cleanup:**
   - After deployment, delete your temporary branch to keep the repository clean:
     ```bash
     git branch -d add-new-rg
     git push origin --delete add-new-rg
     ```

### Example of Adding a New Resource Group (RG)

1. **Task Identification:** The team needs a new Azure resource group named "example-rg" in the "East US" region.

2. **Branching (if applicable):** 
   ```bash
   git checkout -b add-new-rg
   ```

3. **Updating Terraform Configuration:**
   ```hcl
   resource "azurerm_resource_group" "example" {
     name     = "example-rg"
     location = "East US"
   }
   ```

4. **Local Testing:**
   ```bash
   terraform init
   terraform plan
   ```

5. **Push Changes and Create PR:**
   ```bash
   git push origin add-new-rg
   ```
   - Create PR for review.

6. **Code Review and Merge:** After review, merge into the main branch.

7. **CI/CD Deployment:** Automated pipeline applies changes, creating the resource group.

8. **Cleanup:** Delete the temporary branch.

### Conclusion

Trunk-based development for Terraform repositories fosters collaboration, enhances integration speed, and improves overall infrastructure management. By following this structured approach, teams can efficiently manage changes, maintain code quality, and reduce deployment risks.