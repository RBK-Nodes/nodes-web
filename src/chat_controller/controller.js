const axios = require('axios').create({
    headers:  {
        'authorization': `bearer ${localStorage.getItem("token")}`
    }
});
const url = process.env.API_URL || 'https://nodes-chat-api.herokuapp.com'

export async function searchUser(username) {

    return axios.post(url + '/finduser', { username });
}

export async function getAllRequests(username) {
    return axios.post(url + '/showfriendrequest', { username });
}

export async function getAllFriends(username) {

    return axios.post(url + '/getfriends', { username });

}


export async function sendFriendRequest(friendName, yourname) {
    return axios.post(url + '/sendfriendrequest', {
        requester: yourname,
        target: friendName
    });
}

export async function approveFriendRequest(friendName, yourname) {
    return axios.post(url + '/acceptfriendrequest', {
        requester: friendName,
        target: yourname
    })
}

export async function rejectFriendRequest(friendName, yourname) {

    return axios.post(url+'/rejectfriendrequest', {
        requester: friendName,
        target: yourname
    })

}

 export async function getChat(user1, user2) {
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

