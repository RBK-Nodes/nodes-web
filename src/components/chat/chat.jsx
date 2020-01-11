import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import FriendsList from "../friends/friendsList/friendsList.jsx";
import { FaRegHandPointLeft } from 'react-icons/fa'
import MessageList from "../messages/MessagesList.jsx";
import SendMessageForm from "../messages/sendMessageForm.jsx";
import { getChat } from '../../chat_controller/controller';
//implent it later
// import GifLoader from 'react-gif-loader';



var url = "http://127.0.0.1:5001"


export function Chat(props) {
  //using hooks
  console.log('rendered chat')
  const [chat, setChat] = useState({ id: null, messages: [] })

  function connect(user) {
    getChat(user, localStorage.getItem('username'))
      .then(({ data }) => {
        setChat(data)
        console.log(props)
      })
  }

  function updateChat(msg) {
    console.log('message')
    var oldMessages = chat.messages;
    oldMessages.push(msg);
    setChat({ id: chat.id, messages: oldMessages });
  }

  useEffect(() => {
    console.log("room" + chat.id)
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
            <br />
            <br />
            <br />
            {/* <GifLoader
              loading={chat.id === null}
              imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
              imageStyle={{}}
              overlayBackground="rgba(0,0,0,0.5)" /> */}
            <FaRegHandPointLeft /> {" "}  Click on a Friend to Start a Chat
          </div>
        }
      })()}
      <SendMessageForm click={sendMessage} />
    </div >
  )
}
export default Chat;
