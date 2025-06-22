# 🚀 **Docker Detailed Notes — Batch 16-2**

---

### 📌 **Docker Command Syntax**

* General format:

  ```
  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
  ```
* `docker run`: Command to create and start a new container from an image.
* **IMAGE** → The base image (e.g., `nginx`, `ubuntu`).
* **OPTIONS** → Custom settings (e.g., container name, ports).
* **COMMAND \[ARG...]** → Commands passed to the container.

👉 **Note:**
Everything inside `[]` (square brackets) is **optional**.

---

### 📌 **Example Command**

```
docker run --name pappu -d nginx
```

* `--name pappu` → Names the container `pappu`.
* `-d` → Detached mode (runs in background).
* `nginx` → The image used.

---

### 📌 **Docker Command Conventions**

* 🔹 Small letters → Constants (e.g., `run`, `pull`, `start`)
* 🔹 CAPITAL letters → Variables/placeholders (e.g., `IMAGE`, `COMMAND`)

---

### 📌 **Examples of Docker Run**

* Simple:

  ```
  docker run nginx
  ```

  Runs an nginx container in foreground mode.

* With options:

  ```
  docker run --name mynginx -p 8080:80 -d nginx
  ```

  * Names the container `mynginx`
  * Maps host port 8080 to container port 80
  * Detached mode

---

### 📌 **Docker Usage in Ubuntu Terminal**

* Example command you would type:

  ```
  docker run nginx
  ```
* Opens terminal container with nginx running.

---

## 📝 **Key Concepts**

✅ **Docker Run:** Launches a container from a specified image.

✅ **Options (Flags)**:

* `--name` → Give your container a custom name.
* `-d` → Run container in background (detached mode).
* `-p` → Map ports from host to container.

✅ **Optional Elements:** Indicated with `[]` in command syntax.

✅ **Constants vs Variables:**

* Constants → Written in small letters → Actual commands.
* Variables → Written in CAPITAL letters → Values to supply (e.g., IMAGE name).

---

## 💡 **Tip**

👉 *Always check options and arguments carefully to avoid unnecessary errors. Square brackets mean that part is not mandatory.*

