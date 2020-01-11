import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { getAllFriends } from '../../../chat_controller/controller';
import Friend from './friend.jsx'
function FriendsList() {
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
            <form>
                {friends.map(friend => {
                    return <Friend
                        //style={{ marginLeft: "10px" }}
                        friend={friend} />
                })}
            </form>
        </div>
    )

}

export default FriendsList