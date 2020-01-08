import React, { useState } from "react";
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
export function Chat(props) {
    //using hooks
    const [message, setMessage] = useState('')
    var socketHandler = () => {
        //set room name id here !!!
        io('http://localhost:5000/room1').on('connect', () => {
            console.log('connected!')
        })
    }

    var handleSubmit = (e) => {
        e.preventDefault()
        //submit the form 

    }
    return (
        <div >


            THIS is the CHAT SECTION
            <br />
            <br />
            <br />
            <div className="message-container"></div>
            <div style={{ padding: "300px" }}>
                <Input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    multiline></Input>
                <Button
                    onClick={e => {
                        //call the Handlsubmit 
                        setMessage('')
                        console.log(message)
                    }}
                    color="secondary">Send</Button>
            </div>
        </div >
    )
}
