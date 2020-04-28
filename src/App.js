import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import testdata from './testdata';

import Otsikko from './components/Otsikko/Otsikko';
import Menu from './components/Menu/Menu';
import Tankit from './components/Tankit/Tankit';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import AddTankki from './components/AddTankki/AddTankki';
import EditTankki from './components/EditTankki/EditTankki';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: testdata
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteTankki = this.handleDeleteTankki.bind(this);
  }

handleFormSubmit(newdata) {
  let storeddata = this.state.data.slice();
  const index = storeddata.findIndex(item => item.id === newdata.id);
  if (index >= 0) {
    storeddata[index] = newdata;
  } else {
    storeddata.push(newdata);
  }
  storeddata.sort((a,b) => { 
    const aDate = new Date(a.pvm);
    const bDate = new Date(b.pvm);
    return bDate.getTime() - aDate.getTime();
   } );
  this.setState({
    data: storeddata
  });
}

handleDeleteTankki(id) {
  let storeddata = this.state.data.slice();
  storeddata = storeddata.filter(item => item.id !== id);
  this.setState({
    data: storeddata
  });
}

render() {
    return (
      <div className="kokonaan">
      <Router>
        <div className="App">
          <Otsikko />
          <Route path="/" exact render={() => <Tankit data={this.state.data} />} />
          <Route path="/stats" render={() => <Stats data={this.state.data} /> } />
          <Route path="/settings" component={Settings} />
          <Route path="/add" render={() => <AddTankki onFormSubmit={this.handleFormSubmit} />} />
          <Route path="/edit/:id" render={(props) => <EditTankki data={this.state.data} 
                                                                 onFormSubmit={this.handleFormSubmit} 
                                                                 onDeleteTankki={this.handleDeleteTankki} 
                                                                 {...props} />} />
          <Menu />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;