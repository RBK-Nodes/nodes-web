import React from 'react'
import ReactEmoji from 'react-emoji'

function Message(props) {

    return (
        props.username === localStorage.getItem("username") ?
            (
                < div className="message1" >
                    <div className="message1-username">{props.username}</div>
                    <div className="message1-text">{ReactEmoji.emojify(props.text)}</div>
                </div>
            )
            :
            (
                <div className="message">
                    <div className="message-username">{props.username}</div>
                    <div className="message-text">{ReactEmoji.emojify(props.text)}</div>
                </div>
            )
    )
}
export default Message