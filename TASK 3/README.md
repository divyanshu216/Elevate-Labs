# Book API - Node.js & Express

A simple **REST API** to manage a list of books using **Node.js** and **Express**. The API supports **CRUD operations** (Create, Read, Update, Delete) and stores data **in-memory** (no database required).

---

## 🚀 Features

- **GET /books** - Retrieve all books
- **POST /books** - Add a new book
- **PUT /books/:id** - Update a book by ID
- **DELETE /books/:id** - Delete a book by ID

---

## 🛠️ Technologies Used

- Node.js
- Express
- JSON (for request/response body)

---

## 📦 Setup Instructions

1. **Clone the repository** (or create a new folder)
   ```bash
   git clone <repository-url>
   cd book-api
   ```

2. **Initialize Node.js project**
   ```bash
   npm init -y
   ```

3. **Install Express**
   ```bash
   npm install express
   ```

4. **Create `server.js`** (code is already provided in instructions above)

5. **Run the server**
   ```bash
   node server.js
   ```
   Server runs at: `http://localhost:3000`

---

## 🧪 Testing Endpoints

You can test endpoints using **Hoppscotch**, **Postman**, or **curl**.

- **GET all books**
  ```
GET http://localhost:3000/books
```

- **POST a new book**
  ```
POST http://localhost:3000/books
Body (JSON):
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki"
}
```

- **PUT update book**
  ```
PUT http://localhost:3000/books/2
Body (JSON):
{
  "title": "Animal Farm"
}
```

- **DELETE book**
  ```
DELETE http://localhost:3000/books/1
```

---

## ⚡ Notes

- Data is **stored in-memory**, so all changes reset when the server restarts.
- Use tools like **Hoppscotch** to quickly test requests.

---

## License

This project is open-source and free to use.