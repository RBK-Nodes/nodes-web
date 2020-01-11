import React, { useState } from "react"
import { Button } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { searchUser, sendFriendRequest } from '../../../chat_controller/controller.js'
import Swal from 'sweetalert2'

export var SearchFriends = (props) => {
    const [username, setUsername] = useState('')

    var handleSubmit = (e) => {
        e.preventDefault();
        searchUser(username)
            .then(username => {
                if (username.data !== 'invalid') {
                    Swal.fire({
                        title: `<strong> ${username.data} WAS FOUND </strong>`,
                        text: `You and ${username.data} could be great friends`,
                        icon: 'question',
                        html: `<b>${username.data}</b>`,
                        showCancelButton: true,
                        confirmButtonColor: '#0000ff',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Add as Friend',
                        focusConfirm: false,
                    }).then((result) => {
                        if (result.value) {
                            //add user
                            console.log('should be sending !!!')
                            sendFriendRequest(username.data, localStorage.getItem("username"))
                                .then(ok => {
                                    console.log(ok)
                                    Swal.fire(
                                        'Friend Request Sent! ',
                                        `It's time for ${username.data} to accecpt.`,
                                        'success'
                                    )
                                })
                        }
                    })
                }
                else {
                    Swal.fire({
                        title: `<strong> ${username.data} NOT FOUND </strong>`,
                        icon: 'rrror',
                        showCancelButton: true,
                        cancelButtonColor: '#d33',
                        focusCancel: false,
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="search-friends">
            <form className="search-form"

                // style={{ padding: "25% 25% 25% 40%" }}
                onSubmit={e => handleSubmit(e)}>
                <Input type="text"
                    placeholder="search for new friends"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    required />
                <SearchIcon />
                <br />
                <br />

                <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
        </div>
    )
}
export default SearchFriends