import React, { Component } from "react";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";
import SavedBooks from "./components/SavedBooks";

class App extends Component {

  state = {
    location: window.location.pathname
  }

  render() {

    let display;

    if (this.state.location === "/") {
      display = <Results />;
    } else {
      display = <SavedBooks />;
    }

    return (
      <div>
        <Nav location={this.state.location}/>
        <Jumbotron />
        <Container fluid>
          <Row>
            <Col size="12">
              {display}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

