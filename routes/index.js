const path = require("path");
const express = require('express');
// const bookRoutes = require("./api/book");
const {googleController} = require("../controllers/googleController");
const {bookController} = require("../controllers/bookController");
const router = express.Router();
// for books
// router.use("/books", bookRoutes);

// for google
router.get('/api/google', googleController.findAll);

router.get('/api/books', bookController.findAll);
router.post('/api/books', bookController.create);
router.delete('/api/books', bookController.remove);


// for no good route
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;