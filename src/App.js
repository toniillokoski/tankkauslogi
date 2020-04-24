import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Otsikko from './components/Otsikko/Otsikko';
import Menu from './components/Menu/Menu';

import Tankit from './components/Tankit/Tankit';
import Ajopäiväkirja from './components/Ajopäiväkirja/Ajopäiväkirja';
import Settings from './components/Settings/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Otsikko />
          <Route path="/" exact component={Tankit} />
          <Route path="/ajo" exact component={Ajopäiväkirja} />
          <Route path="/settings" exact component={Settings} />
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;