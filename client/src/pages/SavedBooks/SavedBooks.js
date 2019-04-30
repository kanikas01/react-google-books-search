import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./SavedBooks.css";

class SavedBooks extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </Jumbotron>
        <h1>SavedBooks</h1>
      </div>
    );
  }
}

export default SavedBooks;