const axios = require('axios');
const path = require('path')
const url = 'http://localhost:5001'

async function searchUser(username) {

    return axios.post(url + '/finduser', { username });
}

async function getAllRequests(username) {
    return axios.post(url + '/showfriendrequest', { username });
}

async function getAllFriends(username) {
    try {
        const response = await axios.post(url + '/getfriends', { username });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


async function sendFriendRequest(friendName, yourname) {
    return axios.post(url + '/sendfriendrequest', {
        requester: yourname,
        target: friendName
    });
}

async function approveFriendRequest(friendName, yourname) {
    try {
        const response = await axios.post(url + '/accecptfriendrequest',
            {
                requester: friendName,
                target: yourname
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function rejectFriendRequest(username) {
    try {
        const response = await axios.post('http://localhost:5001/rejectfriendrequest', { username });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function getChat(username) {
    try {
        const response = await axios.post('http://localhost:5001/getchat', { username });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    searchUser,
    getAllRequests,
    getAllFriends,
    sendFriendRequest,
    approveFriendRequest,
    rejectFriendRequest,
    getChat
}