import React, { Component } from 'react';
import { Login } from './components/login/login.jsx'
import { SignUp } from './components/signup/signup.jsx'
import { Home } from './components/home/home.jsx'
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
        <div  >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <ul><Link to={'/login'} className="nav-link"> Login </Link></ul>
              <ul><Link to={'/signup'} className="nav-link"> Signup </Link></ul>
              <ul><Link to={'/home'} className="nav-link"> Home </Link></ul>
              <img id="logo" src="https://appdevelopermagazine.com/images/dir/Nodes_Logo_RGB-1024x365_8a7k7464.png"></img>
            </ul>
          </nav>
          <Switch >
            <Route exact path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;