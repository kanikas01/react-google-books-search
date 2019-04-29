import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    className="jumbotron"
  >
    {children}
    <h1>(React) Google Books Search</h1>
    <h2>Search for and Save Books of Interest</h2>
  </div>
);

export default Jumbotron;
