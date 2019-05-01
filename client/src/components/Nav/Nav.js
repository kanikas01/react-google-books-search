import React, { Component } from "react";

class Nav extends Component {
  render () {

    let navItemClassHome = "nav-item active";
    let navItemClassSaved = "nav-item";

    if (this.props.location === "/saved") {
      navItemClassHome = "nav-item";
      navItemClassSaved = "nav-item active";
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="/">Google Books</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={navItemClassHome}>
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className={navItemClassSaved}>
              <a className="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
