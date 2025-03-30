# Elearn Backend API

This is the backend service for the **Elearn Portal**, built using **.NET Core** and **MySQL**. It provides APIs to manage courses and lessons.

---

## 🚀 Setup Instructions

### **1️⃣ Prerequisites**

Ensure you have the following installed:

- **.NET SDK 8.0+** → [Download Here](https://dotnet.microsoft.com/en-us/download)
- **MySQL Server 8.0+** → [Download Here](https://dev.mysql.com/downloads/)
- **Docker** (if using containers) → [Download Here](https://www.docker.com/get-started)
- **Postman** (for API testing) → [Download Here](https://www.postman.com/)

---

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/your-repo/elearn-backend.git
cd elearn-backend
```

---

### **3️⃣ Configure the Database Connection**

Update the `appsettings.json` file in the project root:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=elearn_db;User=root;Password=rootpassword;"
  }
}
```

For Docker-based MySQL setup, update to:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=mysql;Database=elearn_db;User=root;Password=rootpassword;"
  }
}
```

---

### **4️⃣ Install Dependencies**

```sh
dotnet restore
```

---

### **5️⃣ Build the Application**

```sh
dotnet build --configuration Release
```

---

## 🏗️ Build and Publish

### **1️⃣ Build the Application**

```sh
dotnet build --configuration Release
```

### **2️⃣ Publish for Deployment**

```sh
dotnet publish -c Release -o ./publish
```

This will create a self-contained publish directory under `./publish`.

### **3️⃣ Running the Published Application**

```sh
cd publish
dotnet ElearnBackend.dll
```

---

## 🐳 Running with Docker

### **1️⃣ Build the Docker Image**

```sh
docker build -t elearn-backend .
```

### **2️⃣ Run the Container**

```sh
docker run -p 5000:5000 -p 5001:5001 elearn-backend
```

---

## 🔄 Running with Docker Compose (Backend + MySQL)

### **1️⃣ Create & Start Services**

```sh
docker-compose up -d
```

This will start **MySQL** and the **backend API**.

---

## 📡 API Endpoints

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| GET    | `/api/courses`      | Get all courses  |
| POST   | `/api/courses`      | Add a new course |
| GET    | `/api/courses/{id}` | Get course by ID |
| DELETE | `/api/courses/{id}` | Delete a course  |

