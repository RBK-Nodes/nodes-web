import React, { useEffect, useState } from "react";
import Request from './request.jsx'
import { getAllRequests } from '../../../chat_controller/controller.js'
var request;
getAllRequests(localStorage.getItem("username"))
    .then(result => {
        request = result.data
    })
function FriendRequestList() {
    const [friendRequests, setFriendRequests] = useState(
        [
            "Adam",
            "Mohammed",
            "Abdo"
        ]
    )
    // I need to edit this later
    
    // useEffect(() => {
    //     console.log(request)
    // })


    return (
        <div className="requests"
            style={{
                height: "200px"
            }}
        >
            {

                request.map((friend, index) => {
                    return <Request key={index + 1} id={index} name={friend} />;
                })
            }
        </div >
    );
}

export default FriendRequestList;