import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chat from "../chat/chat.jsx";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FriendRequestList from "../friends/firendRequest/requestsList.jsx";
import SearchFriends from "../friends/searchFriends/SearchFriends.jsx";
import io from 'socket.io-client';
import Axios from 'axios';
import { userValidator, refreshTokenUpdater } from '../../auth_controller/controller.js'

require('dotenv').config()

const url = process.env.API_URL || 'https://nodes-chat-api.herokuapp.com/'



export function Home(props) {
  const [loggedIn, setLoggedIn] = useState(true);



  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  userValidator()
    .then(response => {
      console.log('responsoe', response)
      if (response.data === "valid") {
        console.log("ITS ALL GOOD BABY")
      }
    })
    .catch(() => {
      refreshTokenUpdater()
        .catch(() => {
          setLoggedIn(false)
        })
    })

  const socket = io(url);
  return (
    <Router>
      <div className="home">
        <nav className="navigate">
          <ul className="navbarhome">
            {/* <ul> */}
            <Link to={"/chat"} className="nav-link">
              {" "}
              <Button>Chat</Button>
              {" "}
            </Link>
            {/* </ul> */}
            {/* <ul> */}
            <Link to={"/requests"} className="nav-link">
              {" "}
              <Button>Friends Requests</Button>
              {" "}
            </Link>
            {/* </ul> */}
            {/* <ul> */}
            <Link to={"/search"} className="nav-link">
              {" "}
              <Button>Search</Button>
              {" "}
            </Link>
            {/* </ul> */}
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
