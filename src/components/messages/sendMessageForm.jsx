import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { FaTelegramPlane } from 'react-icons/fa'
export function SendMessageForm(props) {

  const [message, setMessage] = useState('')

  var handleSubmit = (e) => {
    e.preventDefault()
    props.click(message);
  }

  return (
    <form
      className="send-message-form"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        multiline
        required></Input>
      <FaTelegramPlane />
      <Button
        type="submit"
        color="secondary"
      >Send</Button>

<<<<<<< HEAD
=======
    const [message, setMessage] = useState('')
  
    var handleSubmit = (e) => {
        e.preventDefault()
        props.click(message);
        setMessage("");
    }
>>>>>>> a8cd41baf067d283f08ca16b2dc57e683fb72923

    </form>
  )
}
export default SendMessageForm;
