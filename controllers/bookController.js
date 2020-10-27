const db = require("../models");

class BookController {
  findAll(req, res) {
    db.Book.find(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  }
  create(req, res) {
    console.log('req.body.volumeInfo')
    db.Book.create(req.body.volumeInfo)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  };
  remove(req, res) {
    console.log('remove');
    db.Book.remove({_id: req.params.id})
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  };
}

const bookController = new BookController();
module.exports = {
  bookController,
};