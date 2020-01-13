import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { signIn } from '../../auth_controller/controller.js'
export function Login(props) {
    // using react hooks takes the user name and the password  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIslogged] = useState(false)

    //handling the submit of the password and the username 
    var handleSubmit = e => {
        e.preventDefault();
        let user = {
            username,
            password
        }
        signIn(user)
            .then(() => {
                setIslogged(true)
                props.login(true)
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong username or password',
                    footer: '<a href>TRY AGIAN?</a>'
                })
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
