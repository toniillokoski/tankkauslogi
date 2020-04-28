import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import firebase, { provider, auth } from './firebase';

import Otsikko from './components/Otsikko/Otsikko';
import Menu from './components/Menu/Menu';
import Tankit from './components/Tankit/Tankit';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import AddTankki from './components/AddTankki/AddTankki';
import EditTankki from './components/EditTankki/EditTankki';
import Content from './components/Content/Content';
import Button from './components/buttons/index';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: null,
      error: null
    }
    this.dbRef = firebase.firestore();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteTankki = this.handleDeleteTankki.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

componentDidMount() {

  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        user: user
      });
      this.refData = this.dbRef.collection('data');
    this.refData.orderBy("pvm","desc").onSnapshot((docs) => {
      let data = [];
      docs.forEach((doc) => {
        let docdata = doc.data();
        data.push(docdata);
      });
      this.setState({
        data: data
      });
    });
  }

  });
}

handleFormSubmit(newdata) {
  this.refData.doc(newdata.id).set(newdata);
}

handleDeleteTankki(id) {
  this.refData.doc(id).delete().then().catch(error => {console.error("Virhe tietoa poistettaessa: ", error)});
}

login() {
  auth.signInWithPopup(provider).then((result) => {
    const user = result.user;
    this.setState({
      user: user,
      error: null
    });
  }).catch((error) => {
    const errorMessage = error.message;
    this.setState({
      error: errorMessage
    });
  });
}

logout() {
  auth.signOut().then(() => {
    this.setState({
      user: null
    });
    this.refData = null;
  });
}

render() {

  if (!this.state.user) {
    return (
      <Router>
      <div className="App">
      <Otsikko />
      <Content>
        <p>Et ole kirjautunut sisään!</p>
        <p><Button primary onClick={this.login}>KIRJAUDU</Button></p>
        {this.state.error?<p>{this.state.error}</p>:null}
      </Content>
      <Menu />
      </div>
      </Router>
    );
  }

    return (
      <div className="kokonaan">
      <Router>
        <div className="App">
          <Otsikko />
          <Route path="/" exact render={() => <Tankit data={this.state.data} /> } />
          <Route path="/stats" render={() => <Stats data={this.state.data} /> } />
          <Route path="/settings" render={() => <Settings onLogout={this.logout}
                                                          user={this.state.user} /> } />
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