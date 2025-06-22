# 📘 Kubernetes Pod YAML & `kubectl explain` – Complete Notes

---

### 🚀 What is a Pod in Kubernetes?

* A **Pod** is the **smallest deployable unit** in Kubernetes.
* It can contain **one or more containers** that share the same network and storage.
* Think of a Pod as a **wrapper around your application container(s)**.

---

### 🧾 What is a Pod YAML?

Kubernetes resources like Pods are defined in YAML files, which describe **what to create and how**.

A minimal Pod YAML looks like this:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mycontainer
    image: nginx
```

---

### 🔍 What is `kubectl explain`?

`kubectl explain` is a **CLI helper** that describes the structure and meaning of Kubernetes resource fields.
It is useful when you're writing YAML and are not sure what fields to use or how to nest them.

---

### 🧠 Basic `kubectl explain` Commands

| Command                                     | Purpose                              |
| ------------------------------------------- | ------------------------------------ |
| `kubectl explain pod`                       | Explains top-level structure of Pod  |
| `kubectl explain pod.metadata`              | Shows available metadata fields      |
| `kubectl explain pod.spec`                  | Describes the Pod spec               |
| `kubectl explain pod.spec.containers`       | Shows required fields for containers |
| `kubectl explain pod.spec.containers.image` | Explains the image field             |

Each command shows:

* Type (e.g., string, object, list)
* Description
* Whether it's optional or required

---

### 🛠️ How to Build Pod YAML Using `kubectl explain`

1. Start with:

   ```bash
   kubectl explain pod
   ```
2. Explore fields like:

   ```bash
   kubectl explain pod.metadata
   kubectl explain pod.spec
   kubectl explain pod.spec.containers
   ```
3. Use this information to build a YAML step-by-step.

For example:

* From `spec.containers`, you learn `name`, `image` are required.
* From `metadata`, you add a `name` for the pod.

---

### 🔁 Full Tree with `--recursive`

To get the **full hierarchy** of the Pod object, use:

```bash
kubectl explain pod --recursive
```

This shows all nested fields in a tree format.

---

### 📂 Save Output to a File

To save this full field structure to a file:

```bash
kubectl explain pod --recursive > pod_document.txt
```

✅ Now you have a **reference document** to guide your YAML writing.

---

### 📄 Example of `pod_document.txt` Output (Trimmed)

```
KIND:     Pod
VERSION:  v1

FIELDS:
   apiVersion    <string>
   kind          <string>
   metadata      <Object>
      name         <string>
      labels       <map[string]string>
   spec          <Object>
      containers   <[]Object>
         name         <string>
         image        <string>
         ports        <[]Object>
            containerPort <integer>
```

---

### ✅ Final Example: Complete Pod YAML

Based on what we learned, here’s a working Pod YAML:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-nginx-pod
  labels:
    app: web
spec:
  containers:
  - name: nginx-container
    image: nginx
    ports:
    - containerPort: 80
```

You can apply this with:

```bash
kubectl apply -f mypod.yaml
```

---

### 📌 Summary

| Topic                | Summary                                                                |
| -------------------- | ---------------------------------------------------------------------- |
| `kubectl explain`    | Explore Kubernetes object fields                                       |
| `--recursive`        | Show all nested fields in tree format                                  |
| `> pod_document.txt` | Save output for offline reference                                      |
| YAML Creation        | Use `kubectl explain` to guide YAML creation without memorizing fields |
| Best Use             | When writing YAMLs manually or troubleshooting structure errors        |

