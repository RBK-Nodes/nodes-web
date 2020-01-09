import React, { useState } from "react"
import { Button } from "@material-ui/core";
import Input from '@material-ui/core/Input';

export var SearchFriends = (props) => {
    const [username, setUsername] = useState('')

    var handleSubmit = (e) => {
        e.preventDefault();
        // make database request;
        fetch("https://nodes-chat-app.herokuapp.com/search", {
            method: "POST",

            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(username)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                //                                     reponse returns if user exists // 
                setUsername('')
            })
    }


    return (
        <div className="search-friends">
            <form className="search-form"
                onSubmit={handleSubmit}>
                <Input type="text"
                    placeholder="search for new friends"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    required />
                <Button type="submit">SEARCH</Button>
            </form>
        </div>
    )
}
export default SearchFriends