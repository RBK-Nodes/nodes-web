import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FriendsList from "../friends/friendsList/friendsList.jsx";

import MessageList from "../messages/MessagesList.jsx";
import SendMessageForm from "../messages/sendMessageForm.jsx";
//set room name id here !!!

var socketed = io("http://localhost:5001/room1", {
  query: {
    authorization: `bearer ${localStorage.getItem("token")}`
  }
});

socketed.on("connect", () => {
  console.log("connected!");
});

export function Chat(props) {
  //using hooks
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState();

  useEffect(() => {
    setSocket(socketed);
  }, []);

  var handleSubmit = e => {
    e.preventDefault();
    //submit the form
    socket.emit("MESSAGE", { message: message, senderNickname: "adam" });
    setMessage("");
  };

  return (
    <div className="chat">
      <FriendsList />
      <MessageList />
      <SendMessageForm />
    </div>
  );
}
export default Chat;
