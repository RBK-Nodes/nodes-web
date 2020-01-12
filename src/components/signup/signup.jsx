import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { Redirect } from 'react-router-dom';

export function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [isLogged, setIslogged] = useState(false)
    const [badPass, setBadPass] = useState(false)
    var handleSubmit = e => {
        e.preventDefault();

        if (!passwordChecker()) {
            //change to set the class of the form to red  an
            setBadPass(true);
            return;
        }
        let user = {
            username,
            password
        };

        fetch("https://nodes-chat-auth.herokuapp.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                localStorage.setItem("username", username)
                localStorage.setItem("token", data.token);
                localStorage.setItem("refreshToken", data.refreshToken);

                setPassword('')
                setUsername('')
                setconfirmPassword('')
                setIslogged(true)
            })
    };

    var passwordChecker = () => {
        return password === confirmPassword;
    };

    if (isLogged) {
        return <Redirect to='/home' />
    }

    return (
        <div className="signup-container">
            <h1>JOIN OUR COMMUNITY</h1>
            <form className="signup-form"
                onSubmit={handleSubmit}>
                <label >  </label>
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

                <label >  </label>
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

                <label >   </label>
                <Input
                    placeholder="confirm your password"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setconfirmPassword(e.target.value)}
                    required
                ></Input>
                <br />
                <br />
                <Button id="signUpBtn" type="submit" variant="contained" color="primary" >SignUp</Button>
            </form>
            <div>{badPass ? <h1>PASSWORD DOES NOT MATCH</h1> : ''}</div>
        </div>
    )
}
