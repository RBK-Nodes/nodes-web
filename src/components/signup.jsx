import React, { useState } from "react";

export function SignUp (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    return (
        <form>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <input type ="password" value = {password} onChange={(e) =>{setPassword(e.target.value)}}></input>
            <input type = "password" value = {confirmPassword} onChange= {(e)=>setconfirmPassword(e.tatrget.value)}></input>
        </form>
    )
}

