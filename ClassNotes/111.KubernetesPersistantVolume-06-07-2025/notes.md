# Kubernetes Persistent Volumes (PV) – Detailed Notes

### 1️⃣ Problem Statement

* Kubernetes **Pods are ephemeral** (temporary) in nature.
* Any data inside a Pod is **lost when the Pod is terminated or rescheduled**.
* To persist data across Pod restarts and failures, Kubernetes provides **Persistent Volumes (PV)**.

---

### 2️⃣ What is a Persistent Volume (PV)?

* A **cluster-level resource** in Kubernetes, created and managed by the **admin**.
* Represents **physical storage** available to the cluster (e.g., storage on cloud, NFS, iSCSI).
* Decouples **storage management from Pod lifecycle**.
* Once created, it can be used by Pods using **Persistent Volume Claims (PVC)**.

---

### 3️⃣ Persistent Volume Claim (PVC)

* A **request for storage** by a user or Pod.
* Specifies:

  * **Size (e.g., 100 GB)**
  * Access modes (ReadWriteOnce, ReadOnlyMany, etc.)
  * Storage class (optional for dynamic provisioning).
* Binds to an appropriate PV based on matching requirements.
* Pods **use PVCs to access the storage without worrying about the underlying storage details.**

---

### 4️⃣ How PVC connects to Pods

#### Flow:

1. **Admin creates a PV** in the cluster (e.g., `az-tinku-pv`, 1TB).
2. **User creates a PVC** (e.g., `tondu-pvc`, 100GB).
3. **Pod requests storage** by referencing the PVC in its `volumes` specification.
4. Pod mounts the volume at a specific path inside the container using `volumeMounts`.

---

### 5️⃣ Storage Backends for PV

Persistent Volumes can map to various **underlying storage backends**, such as:

* Azure Storage Account – File Share
* AWS S3 Bucket
* Google Cloud Storage Bucket
* Local storage on **Kubernetes Nodes** (e.g., `/var/lib/kubelet/4gb-volume`)

---

### 6️⃣ Practical Example

#### Scenario:

Pod: `photos-app` needs to store images at `/app/photos`.

#### Definitions:

✅ **PV:**

* Name: `az-tinku-pv`
* Size: 1TB
* Backend: Azure Storage FileShare

✅ **PVC:**

* Name: `tondu-pvc`
* Size: 100GB

✅ **Pod YAML fragment:**

```yaml
volumes:
  - name: mango-volume
    persistentVolumeClaim:
      claimName: tondu-pvc

containers:
  - name: photos-app
    image: photos-app:latest
    volumeMounts:
      - name: mango-volume
        mountPath: /app/photos
```

#### Explanation:

* The Pod will have access to **persistent storage at `/app/photos`** using the storage provided by `tondu-pvc`.
* This data will **persist even if the Pod is deleted or rescheduled**.

---

### 7️⃣ Key Points to Remember

✅ **PV:**

* Cluster-level resource.
* Created by admin.
* Represents physical storage.

✅ **PVC:**

* User-level request for storage.
* Binds to available PVs.
* Specifies size, access mode, storage class.

✅ **Pod usage:**

* Pods use PVC in their volume specifications.
* PVC provides persistent storage to Pods.

✅ **Benefits:**

* Decouples storage lifecycle from Pod lifecycle.
* Enables **data persistence in Kubernetes workloads**.

