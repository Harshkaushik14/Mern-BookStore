const express = require("express");
const router = express.Router();
const booksController = require("../controllers/book-controller");


const Book = require("../models/Book");


router.get("/", booksController.getAllBooks);
router.get("/", booksController.addBooks);
router.get("/:id", booksController.getById);
router.get("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;
