import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component{
  render(){
    return (
      <Router>
      <div className="container">
        <h2>CSE 416 Training Verification</h2>
      </div>
      </Router>
    );
  }
}

export default App;
