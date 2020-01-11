import React, { useState, useEffect } from "react";

import FriendsList from '../friends/friendsList/friendsList.jsx'

import MessageList from '../messages/MessagesList.jsx'
import SendMessageForm from "../messages/sendMessageForm.jsx";

import { getChat } from '../../chat_controller/controller';



var url = "http://192.168.137.100:5001"


export function Chat(props) {
    //using hooks
    console.log('rendered chat')
    const [chat, setChat] = useState({id:null, messages:[]})

    function connect(user) {
        getChat(user, localStorage.getItem('username'))
        .then(({data})=>{
            setChat(data)
            console.log(props)
        })  
    }

    function updateChat(msg) {
        console.log('message')
        var oldMessages = chat.messages;
        oldMessages.push(msg);
        setChat({id: chat.id, messages: oldMessages});
    }

    useEffect(()=>{
        console.log("room"+chat.id)
        props.socket.on("room"+chat.id, updateChat);
        return () => {
            props.socket.off("room"+chat.id)
        }
    },[chat.id])


    function sendMessage(msg) {
        props.socket.emit('message', {username: localStorage.getItem('username'), text: msg, chatId: chat.id})
    }

    return (
        < div className="app">
            <FriendsList click={connect}/>
            {(()=>{
                if(chat.id!==null){
                    return <MessageList chat={chat}/>
                } else {
                    return <div>Click on a Friend</div>
                }
            })()}
            <SendMessageForm click={sendMessage}/>
        </div >
    )
}
export default Chat