import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { approveFriendRequest, rejectFriendRequest } from '../../../chat_controller/controller.js'
function Request(props) {
    console.log('requsts', props.name)
    const [request, setRequest] = useState("");
    var accecptFriendReq = (username) => {
        approveFriendRequest(username, localStorage.getItem("username"));
        //send a request to the database with userID
    }
    var declineFriendReq = (username) => {
        // rejectRequest(id)
        rejectFriendRequest(username, localStorage.getItem("username"))
        //RENDER THE VIEW OF FRIEND REQUEST
    }
    return <div className="freind">
        <p>name :{props.name}</p>
        <p>id :{props.id}</p>

        <Button onClick={accecptFriendReq(props.name)} variant="contained" color="primary">Accecpt</Button>
        <Button onClick={declineFriendReq(props.name)} variant="contained" color="secondary" style={{ marginLeft: "10px" }}>Decline</Button>
    </div>;
}

export default Request;
