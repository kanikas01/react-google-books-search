import React, { Component } from "react";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";
import SavedBooks from "./components/SavedBooks";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container fluid>
          <Row>
            <Col size="12">
              {window.location.pathname === "/" ? (
                <Results />
              ) : (
                <SavedBooks />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
