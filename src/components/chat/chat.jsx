import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import FriendsList from "../friends/friendsList/friendsList.jsx";
import { FaRegHandPointLeft } from 'react-icons/fa'
import MessageList from "../messages/MessagesList.jsx";
import SendMessageForm from "../messages/sendMessageForm.jsx";
import { getChat } from '../../chat_controller/controller';

export function Chat(props) {
  const [chat, setChat] = useState({ id: null, messages: [] })

  function connect(user) {
    getChat(user, localStorage.getItem('username'))
      .then(({ data }) => {
        setChat(data)
      })
  }

  function updateChat(msg) {
    var oldMessages = chat.messages;
    oldMessages.push(msg);
    setChat({ id: chat.id, messages: oldMessages });
  }

  useEffect(() => {
    props.socket.on("room" + chat.id, updateChat);
    return () => {
      props.socket.off("room" + chat.id)
    }
  }, [chat.id])


  function sendMessage(msg) {
    props.socket.emit('message', { username: localStorage.getItem('username'), text: msg, chatId: chat.id })
  }

  return (
    < div className="chat">
      <FriendsList
        click={connect}
      />
      {(() => {
        if (chat.id !== null) {
          return <MessageList chat={chat} />
        } else {
          return <div className="clickFriends" >

            <FaRegHandPointLeft style={{ padding: "30%" }} /> {" "}  Click on a Friend to Start a Chat
          </div>
        }
      })()}
      <SendMessageForm click={sendMessage} />
    </div >
  )
}
export default Chat;
