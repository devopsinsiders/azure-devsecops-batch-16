# Azure Entitlement Management Class Notes

## 1. How to Create a New User?

To create a new user in Azure Active Directory (Entra ID), follow these steps:

1. Sign in to the Azure portal (https://portal.azure.com).
2. In the left-hand navigation pane, select **Azure Active Directory**.
3. Under **Manage**, select **Users** and then click on **New user**.
4. Enter the user's details, such as name, username, and password.
5. Click on **Create** to add the user to the directory.

## 2. How to Grant Contributor Access to an Azure Subscription?

To grant Contributor access to an Azure Subscription, follow these steps:

1. Sign in to the Azure portal.
2. In the left-hand navigation pane, select **Subscriptions**.
3. Select the subscription to which you want to grant access.
4. In the subscription's menu, select **Access control (IAM)**.
5. Click on **Add** and then select **Add role assignment**.
6. In the **Role** dropdown, select **Contributor**.
7. In the **Select** box, search for and select the user or group to whom you want to grant access.
8. Click on **Save** to grant Contributor access to the selected user or group.

## 3. How to Create a New Group and Grant Access to That Group?

To create a new group in Azure Active Directory and grant access to it, follow these steps:

1. Sign in to the Azure portal.
2. In the left-hand navigation pane, select **Azure Active Directory**.
3. Under **Manage**, select **Groups** and then click on **New group**.
4. Enter the group's details, such as name and description.
5. Click on **Create** to add the group to the directory.
6. After creating the group, go to the resource (e.g., subscription) to which you want to grant access.
7. In the resource's menu, select **Access control (IAM)** and then click on **Add** and **Add role assignment**.
8. In the **Role** dropdown, select the appropriate role (e.g., Contributor).
9. In the **Select** box, search for and select the group you created.
10. Click on **Save** to grant access to the group.

## 4. How to Add Members to a Group?

To add members to a group in Azure Active Directory, follow these steps:

1. Sign in to the Azure portal.
2. In the left-hand navigation pane, select **Azure Active Directory**.
3. Under **Manage**, select **Groups** and then click on the group to which you want to add members.
4. In the group's menu, select **Members** and then click on **Add members**.
5. In the **Select members** pane, search for and select the users you want to add to the group.
6. Click on **Select** and then click on **Add** to add the selected users to the group.