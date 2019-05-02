import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import "./SavedBooks.css";

class SavedBooks extends Component {
  
  state = {
    books: [],
    devNull: ""
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState ({ books: res.data }) )
      .catch(err => console.log(err));
  }

  handleDelete = (event, index) => {
    event.preventDefault();
    let book = this.state.books[index];
    API.deleteBook(book._id)
      .then(res => {
        this.setState ({ devNull: this.state.books.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
      <div>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Saved Books</h2>
        </Jumbotron>
        <Container>
          {this.state.books.length ? (
            <div>
              {this.state.books.map((book, index) => (   
                <div className="card my-3" key={book._id}>      
                  <div className="row no-gutters">
                    <div className="card-body book">
                      <h3 className="card-title">{book.title}</h3>
                      <p className="card-text">
                        <small className="text-muted">
                          {book.authors}
                        </small>
                      </p>
                      <div className="card-main">
                        <div className="col-12 col-md-3">
                          <img 
                            src={book.image} 
                            className="card-img pb-3" 
                            alt="book thumbnail" />
                        </div>
                        <div className="col col-md-9">
                          <p className="card-text">{book.description}</p>
                          <div className="buttons">
                            <a className="btn btn-info my-1 col-sm-12 col-md-4 col-lg-2" 
                              href={book.link} 
                              role="button"
                              target="_blank" 
                              rel="noopener noreferrer">View</a>
                            <button 
                              className="btn btn-secondary my-1 col-sm-12 col-md-4 col-lg-2" 
                              type="submit"
                              onClick={(e) => this.handleDelete(e, index) }
                            >Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>   
                </div> 
              ))}
              </div> 
          ) : (
            <h2>You have no saved books</h2>
          )}
        </Container>
      </div>
    );
  }
}

export default SavedBooks;