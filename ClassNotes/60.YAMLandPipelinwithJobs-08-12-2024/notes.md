## 📘 Title: **Standards – Data Representation Formats**

The document illustrates how the same data (a user’s contact details) can be represented in various data serialization formats.

---

### 🧑 Sample Data

```plaintext
Name: aman
Phone: 75685453
Email: aman@gmail.com
```

---

## 📄 1. XML (Extensible Markup Language)

### 🧾 Format:

```xml
<user>
    <name>aman</name>
    <phone>75685453</phone>
    <email>aman@gmail.com</email>
</user>
```

### ✅ Features:

* Markup-based (tags)
* Readable structure
* Requires opening and closing tags
* Used in SOAP, configurations, etc.

---

## 📄 2. JSON (JavaScript Object Notation)

### 🧾 Format:

```json
{
  "name": "aman",
  "phone": "75685453",
  "email": "aman@gmail.com"
}
```

### ✅ Features:

* Key-value pairs
* Lightweight and readable
* Common in REST APIs
* Easily parsed by JavaScript

---

## 📄 3. YAML (YAML Ain’t Markup Language)

### 🧾 Format:

```yaml
name: aman
phone: 75685453
email: aman@gmail.com
```

### ✅ Features:

* Indentation-based
* Very readable
* Used in configuration files (e.g., Kubernetes, GitHub Actions)
* Lists start with `-`

### 💡 Memory Tip:

> **"Jab bhi list/array suno to dimaag me chhota sa chokor dabba aana chahiye"**
> (Translation: Whenever you hear "list/array", imagine a small square box)

That refers to:

```yaml
- item1
- item2
```

Also,

> **"YAML ke liye: ENTER + - "**
> (Use `Enter` followed by `-` for YAML lists)

---

## 📄 4. Protocol Buffers (ProtoBuf)

### 🧾 Format:

```protobuf
syntax = "proto3";

message User {
  string name = 1;
  string phone = 2;
  string email = 3;
}
```

### ✅ Features:

* Compact binary format
* Faster and smaller than JSON/XML
* Schema required (`.proto` file)
* Used in gRPC, internal service communication

---

## 🧠 Memory Aids & Fun Elements

* **Visualization cue**: When learning arrays/lists, imagine square boxes → helpful for understanding YAML lists.
* The examples make abstract formats tangible by showing how a single user object would look in each.

---

### 📝 Conclusion

Each data format serves different use-cases:

| Format           | Human-Readable | Machine-Readable | Use Case Examples                  |
| ---------------- | -------------- | ---------------- | ---------------------------------- |
| XML              | ✅              | ✅                | Web services, legacy systems       |
| JSON             | ✅              | ✅                | Web APIs, JavaScript apps          |
| YAML             | ✅              | ⚠ (indentation)  | Configs (K8s, Ansible, CI/CD)      |
| Protocol Buffers | ❌              | ✅                | gRPC, microservices, internal APIs |
