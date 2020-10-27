const db = require("../models");

class BookController {
  findAll(req, res) {
    db.Book.find(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  }
  create(req, res) {
    console.log('ahhhh')
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  };
  remove(req, res) {
    console.log('remove');
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  };
}

const bookController = new BookController();
module.exports = {
  bookController,
};