## 🛠️ YAML Pipeline Structure in Azure DevOps

#### 📌 Hierarchical Structure:

* **Pipeline**

  * The main definition that includes multiple **Stages**.
* **Stage**

  * Logical division of the pipeline (e.g., build, test, deploy).
  * Each Stage can contain multiple **Jobs**.
* **Job**

  * A collection of steps that run on the same agent.
  * Jobs can run sequentially or in parallel.
  * Each Job includes multiple **Tasks**.
* **Task**

  * A single unit of work (e.g., script execution, file copy, test run).

---

### 🔄 Funny Analogy Used in Diagram

#### Stage: Baccha → Jawani → Budapa

#### 👶 Baccha Stage:

* **Job 1**: Doodh Pina

  * **Task 1**: Glass nikalna
  * **Task 2**: Horlicks Banana
  * **Task 3**: Glass Dhona

* **Job 2**: Rona

  * **Task 1**: Diwal pr sar thokna
  * **Task 2**: Sar pakad ke rona
  * **Task 3**: Chup ho jana

#### 🧑 Jawani:

* **Job 1**: Shadi Karna hai, Bina Daat ke khana hai
* **Job 2**: Paisa kamana hai
* **Job 3**: Skill Upgrade
* **Job 4**: Baccha ko padana hai
* **Job 5**: Mummy Papa ka dhyan rakhna hai
* **Job 6**: Manager ka gaali khana
* **Job 7**: EMI Bharna

#### 🧓 Budapa:

* **Job**: Upr wale ka naam lena hai

---

### 📂 Miscellaneous Info

* **Client - Main**

  * Azure DevOps Server interacts with the pipeline submitted by the client.

* **Sample Submissions**

  * Names, phone numbers, emails listed as examples (possibly dummy data).

