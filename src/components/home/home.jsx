import { Redirect } from "react-router-dom";
import React, { useState } from 'react'
import Chat from '../chat/chat.jsx'
// import Swal from 'sweetalert2'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FriendRequestList from '../friends/firendRequest/requestsList.jsx'
import SearchFriends from '../friends/searchFriends/SearchFriends.jsx'


import Axios from 'axios';
// import Input from '@material-ui/core/Input'
export function Home(props) {
    const [loggedIn, setLoggedIn] = useState(true)

    if (!loggedIn) {
        return <Redirect to='/login' />
    }

    // setInterval(function () {
    let headers = {
        'Content-Type': 'application/json',
        'authorization': `bearer ${localStorage.getItem("token")}`
    }

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
                }
                )
        })
    // },
    //     //change this later
    //     50000000000000000000000000000000000000000000000000000
    // )



    return (
        <div className="home">
            <Router>
                <Link to={'/chat'}><Button variant="contained" color="primary">Chat</Button></Link>
                <Link to={'/requests'}><Button variant="contained" color="primary">Friends Requests</Button></Link>
                <Link to={'/search'}><Button variant="contained" color="primary">Search</Button></Link>




                <Switch >
                    <Route path='/chat' component={Chat} />
                    <Route path='/requests' component={FriendRequestList} />
                    <Route path='/search' component={SearchFriends} />


                </Switch>
            </Router>
        </div >
    )

}




export default Home