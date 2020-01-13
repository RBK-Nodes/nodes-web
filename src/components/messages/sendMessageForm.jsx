import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { FaTelegramPlane } from 'react-icons/fa'
import $ from 'jquery'
export function SendMessageForm(props) {
  useEffect(() => {
    scrollDown()
  })
  var scrollDown = () => {
    $('.message-list').animate({
      scrollTop: $('.message-list').prop('scrollHeight')
    }, 800
      , function () {
        return false
      })
  }

  const [message, setMessage] = useState('')

  var handleSubmit = (e) => {
    e.preventDefault()
    scrollDown(e)
    props.click(message);
    setMessage("")
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
        required></Input>
      <FaTelegramPlane />
      <Button
        type="submit"
        color="secondary"
      >Send</Button>
    </form>
  )
}
export default SendMessageForm;
