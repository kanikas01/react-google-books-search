const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  search: function(req, res) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.query);
  },

  save: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  delete: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
