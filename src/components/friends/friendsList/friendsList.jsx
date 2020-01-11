import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { getAllFriends } from '../../../chat_controller/controller';
function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getAllFriends(localStorage.getItem("username"))
            .then(({ data }) => {
                console.log('Friends!', data)
                setFriends((data))
            })
    }, friends)

    return (
        <div className="friends-list"
        >
            <h3>Friends</h3>
            <ul>
                {friends.map((friend, index) => {
                    return <Button onClick={() => { props.click(friend) }} variant="contained" color="default" style={{ marginLeft: "10px" }} >{friend}</Button>
                })}
            </ul>
        </div>
    )
}

export default FriendsList