const axios = require('axios')({
    headers:  {
        'authorization': `bearer ${localStorage.getItem("token")}`
    }
});
const path = require('path')
const url = 'http://localhost:5001'

async function searchUser(username) {

    return axios.post(url + '/finduser', { username });
}

async function getAllRequests(username) {
    return axios.post(url + '/showfriendrequest', { username });
}

async function getAllFriends(username) {

    return axios.post(url + '/getfriends', { username });

}


async function sendFriendRequest(friendName, yourname) {
    return axios.post(url + '/sendfriendrequest', {
        requester: yourname,
        target: friendName
    });
}

async function approveFriendRequest(friendName, yourname) {
    return axios.post(url + '/acceptfriendrequest', {
        requester: friendName,
        target: yourname
    })
}

async function rejectFriendRequest(friendName, yourname) {

    return axios.post('http://localhost:5001/rejectfriendrequest', {
        requester: friendName,
        target: yourname
    })

}

async function getChat(username) {

    return axios.post('http://localhost:5001/getchat', { username });
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