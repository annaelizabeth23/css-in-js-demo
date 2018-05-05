import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import routes from '../src/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Compare and Contrasting CSS Methods in React</h1>
          <ul>
            <Link to="/regularcss"><li className="basic-nav"> Regular CSS Example </li></Link>
            <Link to="/inlinecss"><li className="basic-nav"> Inline CSS Example </li></Link> 
            <Link to="/cssinjs"><li className="basic-nav"> CSS in JS with Styled Components </li></Link>
          </ul>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
