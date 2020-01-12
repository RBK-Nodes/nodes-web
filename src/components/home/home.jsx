import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chat from "../chat/chat.jsx";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FriendRequestList from "../friends/firendRequest/requestsList.jsx";
import SearchFriends from "../friends/searchFriends/SearchFriends.jsx";
import io from 'socket.io-client';
import Axios from 'axios';
require('dotenv').config()




export function Home(props) {
  const [loggedIn, setLoggedIn] = useState(true);

  var showMe = () => {
    console.log('process.env.AUTH_URL = ', process.env.AUTH_URL)
    console.log('process.env.AUTH_REFRESH_URL = ', process.env.AUTH_REFRESH_URL)
    console.log('process.env.CHAT_URL = ', process.env.CHAT_URL)
  }

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  // setInterval(function () {
  let headers = {
    "Content-Type": "application/json",
    authorization: `bearer ${localStorage.getItem("token")}`
  };

  Axios.post('https://nodes-chat-app.herokuapp.com/auth', {}, {
    headers: headers
  })
    .then((response) => {
      if (response.data === "valid") {
        console.log("ITS ALL GOOD BABY")
      }

    })
    .catch((err) => {
      var username = localStorage.getItem("username")
      var data = {
        "username": username,
        "refreshToken": localStorage.getItem("refreshToken")
      }

      Axios.post('https://nodes-chat-app.herokuapp.com/refresh', data)
        .then((response) => {
          localStorage.setItem("token", response.token)
        })

        .catch(() => {
          localStorage.removeItem("token")
          setLoggedIn(false)
        })
    })

  const socket = io("http://localhost:5001");
  return (
    <Router>
      <div className="home">
        <nav className="navigate">
          <ul className="navbarhome">
            <ul>
              <Link to={"/chat"} className="nav-link">
                {" "}
                Chat
                {" "}
              </Link>
            </ul>
            <ul>
              <Link to={"/requests"} className="nav-link">
                {" "}
                Friends Requests{" "}
              </Link>
            </ul>
            <ul>
              <Link to={"/search"} className="nav-link">
                {" "}
                Search{" "}
              </Link>
            </ul>
            <ul>
              <button onClick={showMe}>showME{" "}
              </button>
            </ul>
          </ul>
        </nav>

        <Switch>
          <Route path="/chat" render={(props => { return <Chat socket={socket} /> })} />
          <Route path="/requests" component={FriendRequestList} />
          <Route path="/search" component={SearchFriends} />
        </Switch>
      </div>
    </Router>
  )
}
export default Home;
