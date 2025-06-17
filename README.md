# 🛠️ User CRUD API (Node.js + Express)

A simple RESTful API built with Node.js and Express to manage users. It allows basic Create, Read, Update, and Delete operations using in-memory storage (no database).

---

## 📦 Tech Stack
- Node.js
- Express.js
- JavaScript (ES6)
- REST API

---

## 🚀 How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/your-username/user-crud-api.git
cd user-crud-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

The server will run on: `http://localhost:3000`

---

## 🧪 Sample API Endpoints

| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | `/users`         | Get all users     |
| POST   | `/users`         | Add a new user    |
| PUT    | `/users/:id`     | Update a user     |
| DELETE | `/users/:id`     | Delete a user     |

---

## ✅ Features

- Uses in-memory storage for simplicity
- Input validation (e.g., name required)
- Clean and beginner-friendly code
- Can be extended to MongoDB easily

---

## 📄 License

This project is licensed under the MIT License.
---

## 📸 Screenshots

### ✅ Terminal – Server Running
![Terminal Running](screenshots/Screenshot_1_terminal.png)

### 🗑️ DELETE Request – User Deleted
![Delete Request](screenshots/Screenshot_2_delete_request.png)

### 📥 GET Request – List Users
![GET Request](screenshots/Screenshot_3_get_request.png)

