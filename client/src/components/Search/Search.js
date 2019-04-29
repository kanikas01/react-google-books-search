import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Book Search</h5>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 mb-4 mt-2 col-12" id="search-input" type="search" placeholder="Title" aria-label="Search" />
            <button className="btn btn-secondary my-sm-0 col-sm-12 col-md-4 col-lg-2" type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;