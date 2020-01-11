import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import Chat from "../chat/chat.jsx";
// import Swal from 'sweetalert2'
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FriendRequestList from "../friends/firendRequest/requestsList.jsx";
import SearchFriends from "../friends/searchFriends/SearchFriends.jsx";

<<<<<<< HEAD
import Axios from "axios";
=======
import io from 'socket.io-client';

import Axios from 'axios';
// import Input from '@material-ui/core/Input'
>>>>>>> a8cd41baf067d283f08ca16b2dc57e683fb72923
export function Home(props) {
  const [loggedIn, setLoggedIn] = useState(true);

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
<<<<<<< HEAD
        .catch(() => {
          localStorage.removeItem("token")
          setLoggedIn(false)
        }
        )
    })
=======
 
        const socket = io("http://localhost:5001");


    return (
        <div className="home">
            <Router>
                <Link to={'/chat'}><Button variant="contained" color="primary">Chat</Button></Link>
                <Link to={'/requests'}><Button variant="contained" color="primary">Friends Requests</Button></Link>
                <Link to={'/search'}><Button variant="contained" color="primary">Search</Button></Link>




                <Switch >
                    <Route path='/chat' render={(props)=><Chat {...props} socket={socket}/>} />
                    <Route path='/requests' component={FriendRequestList} />
                    <Route path='/search' component={SearchFriends} />


                </Switch>
            </Router>
        </div >
    )
>>>>>>> a8cd41baf067d283f08ca16b2dc57e683fb72923

  return (
    <Router>
      <div className="home">
        <nav className="navigate">
          <ul className="navbarhome">
            <ul>
              <Link to={"/chat"} className="nav-link">
                {" "}
                Chat{" "}
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
          </ul>
        </nav>

        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/requests" component={FriendRequestList} />
          <Route path="/search" component={SearchFriends} />
        </Switch>
      </div>
    </Router>
  )
}
export default Home;
