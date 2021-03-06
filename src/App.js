import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase, { provider, auth } from './firebase';

import './App.css';

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
        this.refData = this.dbRef.collection("users").doc(user.uid).collection('data');
        this.unsubscribe = this.refData.orderBy("pvm","desc").onSnapshot((docs) => {
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

  // Funktio, jolla syötetään uusi tieto firebasen databaseen.
  handleFormSubmit(newdata) {
    this.refData.doc(newdata.id).set(newdata);
  }

// Poista-napille funktio, joka poistaa tiedon firebasen databasesta.
  handleDeleteTankki(id) {
    this.refData.doc(id).delete().then().catch(error => {
      console.error("Virhe tietoa poistettaessa: ", error)});
  }

// Funktio sisäänkirjaantumiseen.
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

// Uloskirjaus-funktio: poistaa Staten kohdasta "user" arvon.  
  logout() {
    this.unsubscribe();
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
      this.refData = null;
    });
  }
// if-lauseke tarkistaa, löytyy staten käyttäjä-kohdasta jokin arvo (eli käyttäjä), jos
// sitä ei ole, sovellus ajaa alla olevan koodin, joka näyttää sovelluksesta vain 
// otsikon, menun ja sisääkirjaantumiseen vaihtoehdot.

  render() {
    if (!this.state.user) {
      return (
        <div className="kokonaan">
          <Router>
            <div className="App">
              <Otsikko />
              <Content>
                <div className="app_welcome">
                  <div>Et ole vielä kirjautunut sisään.</div>
                  <div><Button third onClick={this.login}>KIRJAUDU</Button></div>
                  <div>{this.state.error?<p>{this.state.error}</p>:null}</div>
                </div>
              </Content>
              <Menu />
            </div>
          </Router>
        </div>
      )
    }

// Jos käyttäjä-tiedot löytyy, ajetaan tämä varsinainen sovelluskoodi

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