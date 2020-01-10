const axios = require('axios');

async function searchUser(username) {
    try {
        const response = await axios.post('http://localhost:5001/******', { username });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


async function getAllFriends() {
    return Axios.post('http://localhost:5001/******', { username })

}

async function getAllRequests(req, res) {
    //expect 'user' as param
    //query for all requests where target is user
    //send back array of requests

}

async function sendRequest(req, res) {
    //expect 'requester' and 'target' as params
    //save new request to DB
}

async function approveRequest(req, res) {
    //expect 'requester' and 'target' as params
    //approve request
}

async function rejectRequest(req, res) {
    //expect 'requester' and 'target' as params
    //reject request
}

async function getChat(req, res) {
    //expect 'userone' and 'usertwo' as params
    //find chatroom
    //find all messages with chatroom id
    //return chatroom id and array of messages
}
module.exports = {
    searchUser,
    getAllFriends,
    sendRequest,
    approveRequest,
    rejectRequest,
    getChat
}