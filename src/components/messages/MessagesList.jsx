import React, { useState, useEffect } from 'react'
import Message from './Message.jsx'
function MessageList(props) {

  return (
    <div className="message-list"
    >
      {props.chat.messages.map((message, index) => {
        return (
          <Message key={index} username={message.username} text={message.text} />
        )
      })}
    </div >
  )
}

export default MessageList;
