import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ObjectList from './components/objectListComponent';
import EditObject from './components/objectEditComponent';
import ViewObject from './components/objectViewComponent';
import CreateObject from './components/objectCreateComponent';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Sphnx Training</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className='navbar-item'>
                  <Link to="/create" className="nav-link">Create Object</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Route path="/" exact component={ObjectList} />
        <Route path ="/edit/:id" component={EditObject} />
        <Route path="/create" component={CreateObject} />
        <Route path="/view/:id" component={ViewObject} />

      </Router>
    );
  }
}

export default App;
