import React, { useState } from 'react';
import { Login } from './components/login/login.jsx'
import { SignUp } from './components/signup/signup.jsx'
import { Home } from './components/home/home.jsx'
import logo from './logo.png'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchFriends from './components/friends/searchFriends/SearchFriends.jsx'


function App() {
  const [logged, setLogged] = useState(false)

  return (
    <Router>
      <div  >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {(() => {
            if (!logged) {
              return (
                <ul className="navbar-nav mr-auto">
                  <ul><Link to={'/login'} className="nav-link"> Login </Link></ul>
                  <ul><Link to={'/signup'} className="nav-link"> Signup </Link></ul>
                  <img id="logo" src={logo}></img>
                </ul>
              )
            } else {
              return (
                <ul className="navbar-nav mr-auto">
                  <ul><Link to={'/search'} className="nav-link"> search </Link></ul>

                  <img id="logo" src={logo}></img>
                </ul>
              )
            }
          })()}
        </nav>
        <Switch >
          <Route exact path='/' render={(props) => <Login {...props} login={setLogged} />} />
          <Route exact path='/login' render={(props) => <Login {...props} login={setLogged} />} />
          <Route path='/signup' component={SignUp} />
          <Route path='/home' component={Home} />
          <Route path='/search' component={SearchFriends} />
        </Switch>
      </div>
    </Router>
  );

}


export default App;