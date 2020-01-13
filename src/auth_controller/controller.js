
const Axios = require('axios')
    .create({
        headers: {
            'authorization': `bearer ${localStorage.getItem("token")}`
        }
    })


const url = process.env.AUTH || 'https://nodes-chat-auth.herokuapp.com'

//  @params data  object 
//  @params method  string
//  @params options  object 

export function signIn(user) {
    return userAuthenticator(user, '/signin')
}
//sends signIn requst with specific user

export function signUp(user) {
    return userAuthenticator(user, '/signup')
}
//sends signUp requst with specific user

export function userAuthenticator(user, method) {
    return fetch(url + method, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user)
    })
        .then((response) => response.json())
        .then(data => {
            localStorage.setItem("username", user.username);
            localStorage.setItem("token", data.token);
            localStorage.setItem("refreshToken", data.refreshToken);
        })
}
// abstract function for  sends http requsts to URL provided  to  authenticate user
// returns a promise

export function reAuthenticate(data = {}, method, options) {
    return Axios.post(url + method, data, options)
}
//an abstract function used to re-authicate user token 
export function userValidator() {
    return reAuthenticate({}, '/auth', {
        headers: {
            "Content-Type": "application/json",
            'authorization': `bearer ${localStorage.getItem("token")}`
        }
    })
}
//validates user if he has valid token or not
export function refreshTokenUpdater() {
    const data = {
        "username": localStorage.getItem("username"),
        "refreshToken": localStorage.getItem("refreshToken")
    }
    return reAuthenticate(data, '/refresh')
        .then((response) => {
            localStorage.setItem("token", response.token)
        })
        .catch((err) => {
            localStorage.removeItem("token")
        })
}
//manages user refresh token sedning a method to the method refresh
