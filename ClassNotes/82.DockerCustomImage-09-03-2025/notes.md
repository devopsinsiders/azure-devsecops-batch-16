# 🚀 **Docker Custom Image Creation — Batch 16-2**

---

### 📌 **Container Creation Tool**

* Docker is a tool used to create containers from images.
* Example images:

  * `nginx.zip`
  * `jenkins`
  * `starbucks.zip` (custom app)

---

### 📌 **DockerHub**

* Public registry to store and share Docker images (pre-built or custom).

---

### 📌 **Custom Image Creation**

✅ **Manual Approach**

* Start with a **base image** (e.g., `nginx`).
* Run a temporary container:

  ```
  docker run -d --name tempcontainer nginx
  ```
* Enter the container:

  ```
  docker exec -it tempcontainer bash
  ```
* Copy Starbucks app code inside:

  ```
  cp /path/to/code /usr/share/nginx/html
  ```
* Create a custom image from container:

  ```
  docker commit tempcontainer starbucks-image
  ```
* Remove temporary container:

  ```
  docker rm tempcontainer
  ```

⚠ **Problems:**

* Manual effort, prone to error
* Not repeatable / hard to version

---

✅ **Automated Approach (Dockerfile)**

* Write a `Dockerfile` with instructions:

  ```
  FROM nginx
  COPY ./starbucks /usr/share/nginx/html
  ```
* Build custom image:

  ```
  docker build -t starbucks-image .
  ```

👉 **Dockerfile:**
A text file that defines steps to build a custom Docker image.

👉 **docker build:**
Reads Dockerfile and creates image.

👉 **docker buildx build:**
Advanced builder supporting multi-platform builds:

```
docker buildx build -t rinkiakepapa:pehlewale .
```

---

### 📌 **Docker Command Conventions**

* `[]` → Optional
* CAPITAL → Variable/placeholders
* SMALL → Constants (command names)
* `|` → OR

---

### 📌 **TechnoFunctional**

* Combination of technical + functional/domain knowledge (e.g., banking, biotech).

---

### 📌 **Helpful Tips**

* Google wisely:

  ```
  terraform azurerm <RESOURCE NAME>
  docker file reference
  ```

---

✅ **Summary:**
👉 Use Dockerfile + `docker build` for clean, repeatable image creation.
👉 Avoid manual `docker commit` for production use.

