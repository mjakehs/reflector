import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
       <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    </Router>
    );
  }
}

export default App;
