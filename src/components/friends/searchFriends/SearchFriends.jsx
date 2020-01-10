import React, { useState } from "react"
import { Button } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
const { searchUser } = require('../../../chat_controller/controller.js')
export var SearchFriends = (props) => {
    const [username, setUsername] = useState('')

    var handleSubmit = (e) => {
        e.preventDefault();

        // make database request; 
        //===============================
        searchUser(username)
    }


    return (
        <div className="search-friends">
            <form className="search-form"

                style={{ padding: "25% 25% 25% 40%" }}
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