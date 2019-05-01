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
                <div class="card my-3">      
                  <div class="row no-gutters">
                    <div class="col">
                      <div class="card-body">
                        <h5 class="card-title">{book.volumeInfo.title}</h5>
                        <p class="card-text">
                          <small class="text-muted">
                            {book.volumeInfo.authors
                              ? book.volumeInfo.authors.join(", ")
                              : ""}
                          </small>
                        </p>
                        <div>
                          <img 
                            src={book.volumeInfo.imageLinks 
                                  ? book.volumeInfo.imageLinks.smallThumbnail 
                                  : ""} 
                            class="card-img" 
                            alt="book thumbnail" />
                            <p class="card-text">{book.volumeInfo.description}</p>
                        </div>
                        
                        <a class="btn btn-info" 
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