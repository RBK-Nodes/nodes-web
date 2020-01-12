import React, { useState, useEffect } from 'react'
import Message from './Message.jsx'
import ReactEmoji from 'react-emoji'
function MessageList(props) {

  return (
    <div className="message-list"
    >

      {props.chat.messages.map((message, index) => {
        return (
          //       <Message key={index} senderId={message.senderId} text={message.text} />

          <div key={index} className="message">
            <div className="message-username">{console.log(message)}{message.username}</div>
            <div className="message-text">{ReactEmoji.emojify(message.text)}</div>
          </div>
        )
      })
      }
    </div >
  )
}

export default MessageList;
