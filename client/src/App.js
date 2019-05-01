import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SavedBooks from "./pages/SavedBooks";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import "./App.css";

class App extends Component {

  state = {
    location: window.location.pathname
  }

  render() {

    return (
      <Router>
        <div>
          <Nav location={this.state.location}/>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

