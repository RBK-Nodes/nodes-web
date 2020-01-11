import React, { useState, useEffect } from 'react'
import Message from './Message.jsx'

function MessageList(props) {

  return (
    <div className="message-list"
    >

<<<<<<< HEAD
      {props.chat.messages.map((message, index) => {
=======


>>>>>>> a8cd41baf067d283f08ca16b2dc57e683fb72923
        return (
          <Message key={index} senderId={message.senderId} text={message.text} />
        )
      })
      }
    </div>
  )
}

export default MessageList;
