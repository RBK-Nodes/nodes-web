import React, { useState } from "react";

export function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    return (
        <form>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <input type ="password" value = {password} onChange={(e) =>{setPassword(e.target.value)}}></input>
        </form>
    )
}