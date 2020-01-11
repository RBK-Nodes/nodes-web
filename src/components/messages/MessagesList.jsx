import React, { useState, useEffect } from 'react'
import Message from './Message.jsx'

function MessageList(props) {

  return (
    <div className="message-list"
    >

      {props.chat.messages.map((message, index) => {
        return (
          //       <Message key={index} senderId={message.senderId} text={message.text} />
          <div key={index} className="message">
            <div className="message-username">{message.senderId}</div>
            <div className="message-text">{message.text}</div>
          </div>
        )
      })
      }










    </div >
  )
}

export default MessageList;
