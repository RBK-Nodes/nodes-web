import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
var socketed = io('http://localhost:5001', {
    query: {
        'authorization': `bearer ${localStorage.getItem("token")}`
    }
})
socketed.on('connect', () => {
    console.log('connected!');
})

export function SendMessageForm() {

    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState()

    useEffect(() => {
        setSocket(socketed)
    }, [])

    var handleSubmit = (e) => {
        e.preventDefault()
        //submit the form 
        socket.emit("MESSAGE", { "message": message, "senderNickname": 'adam' })
        setMessage('');
    }

    return (
        <div className="app">
            <form
                className="send-message-form"
                onSubmit={handleSubmit}
                style={{ padding: " 0px  100px 0px 500px  ", width: "85%" }}
            >
                <Input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    multiline></Input>
                <Button
                    type="submit"
                    color="secondary"
                >Send</Button>
            </form>
        </div >
    )
}
export default SendMessageForm