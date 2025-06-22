# 🚀 **Docker Custom Images — Batch 16-2**

---

### 📌 **What is a Docker Container?**

* A Docker **container** is a **running instance** of a Docker image.
* Example containers:

  * `dhondhu-nginx`
  * `tondu-nginx`

---

### 📌 **Creating Containers with Nginx**

Example command to run a container:

```
docker run -d -p 8081:80 --name tondunginx nginx
```

* `-d`: Detached mode
* `-p 8081:80`: Maps host port 8081 to container port 80
* `--name tondunginx`: Container name is `tondunginx`
* `nginx`: The image used

---

### 📌 **Custom Image with docker commit**

Steps:
1️⃣ Run and modify container:

```
docker run -d --name temporary nginx
docker exec -it temporary bash
```

2️⃣ Inside container → Update code at:

```
/usr/share/nginx/html
```

3️⃣ Create custom image:

```
docker commit temporary devopsinsidersimage
```

4️⃣ Remove temp container:

```
docker rm temporary
```

👉 **Problems with this approach**

* You must:

  * Create temporary container
  * Manually modify code (via `exec`)
  * Clean up temporary container
* Prone to errors, not reusable

---

### 📌 **Solution — Dockerfile**

* A **Dockerfile** defines:

  * Base image
  * Instructions (e.g., copy code, install packages)
* Example:

  ```
  FROM nginx
  COPY ./html /usr/share/nginx/html
  ```
* Build custom image:

  ```
  docker build -t customnginximage .
  ```

✅ **Advantages of Dockerfile**

* Clean, reusable, version-controlled
* No need to manually modify containers or commit

---

### 📌 **Summary**

👉 docker commit → Quick, dirty way to make custom images
👉 Dockerfile → Clean, professional way for image creation
👉 `docker build` → Builds image from Dockerfile
