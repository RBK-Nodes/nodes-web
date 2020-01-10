import React, { useState } from "react";
import Button from '@material-ui/core/Button';
// const { approveRequest, rejectRequest } = require('../../../chat_controller/controller.js')
function Request(props) {
    console.log('requsts', props.name)
    const [request, setRequest] = useState("");
    var accecptFriendReq = (username) => {
        approveRequest(name);
        //send a request to the database with userID
    }
    var declineFriendReq = (username) => {
        // rejectRequest(id)
        //send a request to the database with userID
    }
    return <div className="freind">
        <p>name :{props.name}</p>
        <p>id :{props.id}</p>

        <Button onClick={accecptFriendReq(props.name)} variant="contained" color="primary">Accecpt</Button>
        <Button onClick={accecptFriendReq(props.name)} variant="contained" color="secondary" style={{ marginLeft: "10px" }}>Decline</Button>
    </div>;
}

export default Request;
