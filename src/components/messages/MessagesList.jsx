import React, {useState, useEffect} from 'react'


function MessageList(props){

        return (
            <div className="message-list"
                style={{ width: "186%", height: "640px" }}>

                {props.chat.messages.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    
}

export default MessageList