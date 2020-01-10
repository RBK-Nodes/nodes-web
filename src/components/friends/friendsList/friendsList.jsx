import React, { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { getAllFriends } from '../../../chat_controller/controller';

function FriendsList() {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        getAllFriends(localStorage.getItem("username"))
        .then(({data})=>{
            setFriends((data))
        })
    }, friends)

        return (
            <div className="friends-list"
                st>
                <form>
                    {friends.map(friend=>{
                        return <Button variant="contained" color="default" style={{ marginLeft: "10px" }} >{friend}</Button>
                    })}
                </form>
            </div>
        )
    
}

export default FriendsList