const fetch = require('node-fetch');

class GoogleController {
  findAll(req, res) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}`)
      .then(res => res.json())
      .then(body => {
        res.status(200).send(body)
      }
    )
    .catch(error => {
      console.log(error);
    });
    }
}

const googleController = new GoogleController();
module.exports = {
  googleController,
};