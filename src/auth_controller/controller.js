
const Axios = require('axios')
// .create({
//     headers: {
//         'authorization': `bearer ${localStorage.getItem("token")}`
//     }

const url = process.env.AUTH || 'https://nodes-chat-auth.herokuapp.com'

function signIn(user) {
    return userAuthenticator(user, '/signin')
}

function signUp(user) {
    return userAuthenticator(user, '/signup')
}


function userAuthenticator(user, method) {
    return fetch(url + method, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user)
    })
        .then((response) => response.json())
        .then(data => {
            console.log('happedened', data)
            localStorage.setItem("username", user.username);
            localStorage.setItem("token", data.token);
            localStorage.setItem("refreshToken", data.refreshToken);
        })
}

async function reAuthenticate(data = {}, method, options) {
    return Axios.post(url + method, data, options)
}
async function userValidator() {
    return reAuthenticate({}, '/auth', {
        headers: {
            "Content-Type": "application/json",
            'authorization': `bearer ${localStorage.getItem("token")}`
        }
    })
}
function refreshTokenUpdater() {
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
module.exports = {
    signIn,
    signUp,
    userValidator,
    refreshTokenUpdater
}