# 🚀 **Docker Image & Custom Image Creation — Batch 16-2**

---

### 📌 **What is a Docker Image?**

* A Docker image is like a **ZIP package** containing everything needed to run an app (e.g., code, dependencies, config).
* Example:

  * `nginx image` → Pre-built image ready to serve web content.
  * `firefox image` → Pre-built image for browser container.

---

### 📌 **What is a Docker Container?**

* A **container** is a **running instance** of a Docker image.
* Example containers:

  * `nginx- welcome to nginx`
  * `custom image` → A modified or user-built image in use.

---

### 📌 **Steps to Create a Custom Image (Manual way using docker commit)**

1️⃣ Run a temporary container using a base image (e.g., `nginx`).
2️⃣ Enter the container:

```
docker exec -it <container_name> bash
```

3️⃣ Make changes inside the container (e.g., modify `/usr/share/nginx/html`).
4️⃣ Exit the container.
5️⃣ Create a new image:

```
docker commit <container_name> <new_image_name>
```

👉 **Example:**
Requirement: Create custom image for **Starbucks app**

* Start with nginx container
* Clone app code using git
* Copy code inside container directory `/usr/share/nginx/html`
* Commit container to make a custom image

---

### 📌 **docker cp Command**

* Copy files between host and container:

```
docker cp . <container_name>:/usr/share/nginx/html
docker cp <container_name>:/usr/share/nginx/html .
```

---

### 📌 **Dockerfile (Clean solution)**

* Example Dockerfile:

  ```
  FROM nginx
  COPY ./app /usr/share/nginx/html
  ```
* Build custom image:

  ```
  docker build -t starbucks-image .
  ```

✅ **Advantages:**

* Clean, version-controlled, repeatable builds
* No need for manual entry/commit

---

### 📌 **Assignment**

👉 Use `ubuntu` as base image
👉 Install `terraform` in it
👉 Create Dockerfile and build custom image

---

## 💡 **Key Points**

* `docker commit` = Quick, manual, but messy.
* `Dockerfile` + `docker build` = Best practice for custom images.

