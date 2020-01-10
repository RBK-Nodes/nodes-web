import React, { useEffect, useState } from "react";
import Request from './request.jsx'
import { getAllRequests } from '../../../chat_controller/controller.js'

function FriendRequestList(props) {
    const [friendRequests, setFriendRequests] = useState([]);
    const [searched, setSearched] = useState(false)
    // I need to edit this later
    if(!searched) {
        getAllRequests(localStorage.getItem("username"))
    .then(result => {
        console.log("data here",result.data)
        setSearched(true)
        setFriendRequests(result.data)

    })
    .catch(err=>{
        console.log('error', err)
    })
    }

    return (
        <div className="requests"
            style={{
                height: "200px"
            }}
        >
            {

                friendRequests.map((friend, index) => {
                    return <Request req={friendRequests} key={index} id={index} name={friend} />;
                })
            }
        </div >
    );
}

export default FriendRequestList;