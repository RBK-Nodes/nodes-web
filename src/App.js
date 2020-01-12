import React, { useState } from "react";
import { Login } from "./components/login/login.jsx";
import { SignUp } from "./components/signup/signup.jsx";
import { Home } from "./components/home/home.jsx";
import logo from "./logo.png";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <Router>
      <div className="app">
        <nav className="navbar_navbar">
          {(() => {
            if (!logged) {
              return (
                <ul className="navbar-nav mr-auto">
                  <ul>
                    <Link to={"/login"} className="nav-link">
                      {" "}
                      Login{" "}
                    </Link>
                  </ul>
                  <ul>
                    <Link to={"/signup"} className="nav-link">
                      {" "}
                      Signup{" "}
                    </Link>
                  </ul>
                  <img id="logo" src={logo}></img>
                </ul>
              );
            } else {
              return (
                <ul className="navbar-nav mr-auto">
                  <ul><Link to={'/'} className="nav-link" onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("refreshToken")
                    localStorage.removeItem("username")
                    setLogged(false);
                  }}> logout </Link></ul>
                  <img id="logo" src={logo}></img>
                </ul>
              );
            }
          })()}
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Login {...props} login={setLogged} />}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} login={setLogged} />}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
