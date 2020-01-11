import React, { useEffect, useState } from "react";
import Request from "./request.jsx";
import { getAllRequests } from "../../../chat_controller/controller.js";

function FriendRequestList(props) {
  const [friendRequests, setFriendRequests] = useState([]);
  // I need to edit this later

  useEffect(() => {
    getAllRequests(localStorage.getItem("username"))
      .then(result => {
        console.log("data here", result.data);
        setFriendRequests(result.data);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, friendRequests);
  return (
    <div
      className="friend-requests"
    >
      {friendRequests.map((friend, index) => {
        return (
          <Request
            req={friendRequests}
            key={index}
            id={index}
            name={friend}
            updater={setFriendRequests}
          />
        );
      })}
      <div>{!friendRequests.length ? <h1>YOU HAVE NO FRIEND REQUESTS</h1> : ''}</div>
    </div>
  );
}

export default FriendRequestList;
