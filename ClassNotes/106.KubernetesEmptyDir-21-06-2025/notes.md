# 🗂️ What is `emptyDir` in Kubernetes?

* `emptyDir` is a **volume type** in Kubernetes used for temporary storage that is **empty when a Pod starts**.
* It provides a **shared directory** that can be accessed by all containers within a Pod.
* The data **lives as long as the Pod lives** — it is deleted when the Pod is deleted.

---

## 📦 Use Cases

* Sharing files between containers in a Pod.
* Temporary storage during processing (e.g., scratch space).
* Buffering or caching.
* Intermediate build outputs.

---

## 🔧 How it Works

* When a Pod is assigned to a Node, the kubelet creates an `emptyDir` volume on that Node.
* The volume is stored either:

  * **In memory (RAM)** if `medium: Memory` is specified.
  * **On disk** otherwise (default behavior).

---

## 🧾 Example YAML

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: emptydir-demo
spec:
  containers:
    - name: app
      image: busybox
      command: ["sleep", "3600"]
      volumeMounts:
        - mountPath: /data
          name: temp-storage
  volumes:
    - name: temp-storage
      emptyDir: {}  # default disk-based
```

### Memory-based:

```yaml
emptyDir:
  medium: Memory
```

---

## 🧹 Data Lifecycle

* Data is **lost** when:

  * Pod is deleted.
  * Pod is evicted.
  * Node crashes (not recoverable).
* Data is **preserved** across container restarts within the **same Pod**.

---

## ✅ Pros

* Simple and fast.
* No need for external storage.
* Good for temporary scratch space or inter-container communication.

---

## ❌ Limitations

* Not persistent — data lost after Pod deletion.
* Only accessible to containers within the same Pod.
* Storage space is limited by Node resources (RAM or disk).

