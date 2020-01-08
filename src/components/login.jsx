import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'

export function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    var handleSubmit = e => {
        e.preventDefault();
        let user = {
            username,
            password
        };

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then(() => {
            setPassword('')
            setUsername('')
        })
    }
    return (

        <form className="signin-form"
            onSubmit={handleSubmit}>
            <label > username </label>
            <Input
                placeholder="Enter user name"
                type="text"
                value={username}
                onChange={e => {
                    setUsername(e.target.value);
                }}
            ></Input>
            <label > password </label>
            <Input
                placeholder="enter password"
                type="password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value);
                }}
            ></Input>
            <br />
            <Button type="submit" variant="contained" color="primary" >SUBMIT</Button>
        </form>
    )
}