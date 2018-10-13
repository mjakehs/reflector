import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

//include sub-views
import FeedBackFormPage from '../FeedBackFormPage/FeedBackFormPage';
import SubmitCompletePage from '../SubmitCompletePage/SubmitCompletePage';
import Admin from '../Admin/Admin';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
          </header>
          <Route path="/admin" component={Admin} />
          <Route exact path="/" render={() => <Redirect to="/feedback"/>} />
          <Route path="/feedback" component={FeedBackFormPage} />
          <Route path="/complete" component={SubmitCompletePage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(App);
