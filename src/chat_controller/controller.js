const axios = require('axios').create({
    headers:  {
        'authorization': `bearer ${localStorage.getItem("token")}`
    }
});
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

    return axios.post(url+'/rejectfriendrequest', {
        requester: friendName,
        target: yourname
    })

}

async function getChat(user1, user2) {
    return axios.post( url+ '/getmessages', { user1, user2 });
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