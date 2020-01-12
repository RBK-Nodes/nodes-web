import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../auth_controller/controller.js'
import Swal from 'sweetalert2';

export function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [isLogged, setIslogged] = useState(false)
    const [badPass, setBadPass] = useState(false)
    var handleSubmit = e => {
        e.preventDefault();
        if (!passwordChecker()) {
            setBadPass(true);
            return;
        }
        let user = {
            username,
            password
        }

        signUp(user)
            .then(() => {
                setPassword('')
                setUsername('')
                setconfirmPassword('')
                setIslogged(true)
                props.login(true)
            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'User is already registered',
                        footer: '<a href>TRY ANOTHER NAME?</a>'
                    })
                }
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
