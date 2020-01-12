
const Axios = require('axios')
    .create({
        headers: {
            'authorization': `bearer ${localStorage.getItem("token")}`
        }
    })

const url = process.env.AUTH || 'https://nodes-chat-auth.herokuapp.com'

export function signIn(user) {
    return userAuthenticator(user, '/signin')
}

export function signUp(user) {
    return userAuthenticator(user, '/signup')
}


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

export async function reAuthenticate(data = {}, method, options) {
    return Axios.post(url + method, data, options)
}
export async function userValidator() {
    return reAuthenticate({}, '/auth', {
        headers: {
            "Content-Type": "application/json",
            'authorization': `bearer ${localStorage.getItem("token")}`
        }
    })
}
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