const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// In-memory array to store books
let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "1984", author: "George Orwell" }
];

// GET /books → return all books
app.get("/books", (req, res) => {
    res.json(books);
});

// POST /books → add new book
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: "Title and author are required" });
    }
    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /books/:id → update a book by ID
app.put("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book);
});

// DELETE /books/:id → remove book
app.delete("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    const deletedBook = books.splice(bookIndex, 1);
    res.json({ message: "Book deleted", deletedBook });
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
