import React from 'react';
import { SignUp } from './components/signup';
import { Login } from './components/login';
import { Router, Route, Switch, BrowserRouter } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/signup'} className="nav-link">signup</Link></li>
          <li><Link to={'/login'} className="nav-link">login</Link></li>
        </ul>
      </nav>
      <hr />
      {/* <Switch>
          <Route exact path='/' component={} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={login} />
        </Switch> */}
      {/* <SignUp />
        <Login /> */}
    </div>
  )
}

export default App;
