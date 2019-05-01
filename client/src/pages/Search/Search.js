import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./Search.css";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class Search extends Component {

  state = {
    books: [],
    query: ""
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value.replace(" ", "+") });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.query)
      .then(res => { 
        this.setState ({ books: res.data.items });
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
    };

  render () {
    return (
      <div>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </Jumbotron>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Book Search</h5>
              <form className="form-inline my-2 my-lg-0">
                <input 
                  className="form-control mr-sm-2 mb-4 mt-2 col-12" 
                  id="search-input" 
                  type="search" 
                  placeholder="Title" 
                  aria-label="Search"
                  onChange={this.handleInputChange}
                 />
                <button 
                  className="btn btn-secondary my-sm-0 col-sm-12 col-md-4 col-lg-2" 
                  type="submit"
                  onClick={this.handleFormSubmit}
                >Search</button>
              </form>
            </div>
          </div>
        </div>
        <Container>
          {this.state.books.length ? (
            <div>
              {this.state.books.map(book => (   
                <div className="card my-3">      
                  <div className="row no-gutters">
                    <div className="card-body book">
                      <h5 className="card-title">{book.volumeInfo.title}</h5>
                      <p className="card-text">
                        <small className="text-muted">
                          {book.volumeInfo.authors
                            ? book.volumeInfo.authors.join(", ")
                            : ""}
                        </small>
                      </p>
                      <div className="card-main">
                        <div className="col-12 col-md-3">
                          <img 
                            src={book.volumeInfo.imageLinks 
                                  ? book.volumeInfo.imageLinks.smallThumbnail 
                                  : ""} 
                            className="card-img pb-3" 
                            alt="book thumbnail" />
                        </div>
                        <div className="col col-md-9">
                          <p className="card-text">{book.volumeInfo.description}</p>
                          <a className="btn btn-info col-sm-12 col-md-4 col-lg-2" 
                            href={book.volumeInfo.infoLink} 
                            role="button"
                            target="_blank" 
                            rel="noopener noreferrer">View</a>
                          <button 
                            className="btn btn-secondary my-sm-0 col-sm-12 col-md-4 col-lg-2" 
                            type="submit"
                            onClick={this.handleFormSubmit}
                          >Save</button>
                        </div>
                      </div>
                    </div>                    
                  </div>   
                </div> 
              ))}
              </div> 
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Container>
      </div>
    );
  }
}

export default Search;

            {/* <List>
              {this.state.books.map(book => (
                <ListItem key={book.id}>
                  <a href={book.volumeInfo.previewLink}>
                    <strong>
                      {book.volumeInfo.title} by {book.volumeInfo.authors}
                    </strong>
                  </a>
                  <DeleteBtn />
                </ListItem>
              ))}
            </List> */}