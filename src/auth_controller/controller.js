const axios = require('axios')

// use process.env later
const url = process.env.AUTH || 'https://nodes-chat-auth.herokuapp.com/'

async function signIn(user) {
    return axios.post(url + 'signin', user)
}
module.exports = {
    signIn,
}