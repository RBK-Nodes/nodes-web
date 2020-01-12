import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
export function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIslogged] = useState(false)


    var handleSubmit = e => {
        e.preventDefault();
        let user = {
            username,
            password
        };

        fetch("https://nodes-chat-auth.herokuapp.com/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                localStorage.setItem("username", username);
                localStorage.setItem("token", data.token);
                localStorage.setItem("refreshToken", data.refreshToken);

                setPassword('');
                setUsername('');
                setIslogged(true);
                props.login(true);
            }).catch(err => {
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Wrong username or password',
                        footer: '<a href>TRY AGIAN?</a>'
                    })
                }
            })
    }

    if (isLogged) {
        return <Redirect to='/home' />
    }

    return (
        <div className="signup-container">
            <img id="signinImg" src="../../vpn_key-24px.svg" alt="" />
            <h1>SIGN IN</h1>
            <form className="signin-form"
                onSubmit={handleSubmit}>
                <Input
                    placeholder="Enter user name"
                    type="text"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                    required
                ></Input>
                <br />
                <br />

                <Input
                    placeholder="enter password"
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    required
                ></Input>
                <br />
                <br />
                <Button type="submit" variant="contained" color="primary" >SIGN IN</Button>
            </form>
        </div>
    )
}
