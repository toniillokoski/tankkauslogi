import React, { Component } from 'react';
import './App.css';

import Otsikko from './components/Otsikko/Otsikko';
import Menu from './components/Menu/Menu';
import Tankkaus from './components/Tankkaus/Tankkaus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Otsikko />
        <div className="content">
          <Tankkaus />
          <Tankkaus />
          <Tankkaus />
          <Tankkaus />
          <Tankkaus />
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;