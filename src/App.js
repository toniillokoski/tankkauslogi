import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import testdata from './testdata';

import Otsikko from './components/Otsikko/Otsikko';
import Menu from './components/Menu/Menu';
import Tankit from './components/Tankit/Tankit';
import Ajopäiväkirja from './components/Ajopäiväkirja/Ajopäiväkirja';
import Settings from './components/Settings/Settings';
import AddTankki from './components/AddTankki/AddTankki';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testdata
    }
  }

  render() {
      return (
        <div className="kokonaan">
        <Router>
          <div className="App">
            <Otsikko />
            <Route path="/" exact render={() => <Tankit data={this.state.data} />} />
            <Route path="/ajo" exact component={Ajopäiväkirja} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/add" render={() => <AddTankki />} />
            <Menu />
          </div>
        </Router>
        </div>
      );
  }
}

export default App;