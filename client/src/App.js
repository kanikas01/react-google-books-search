import React, { Component } from "react";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";
import "./App.css";
import Jumbotron from "./components/Jumbotron/Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Col size="12">
          <Row>
            
          </Row>
        </Col>
      </div>
    );
  }
}

export default App;
