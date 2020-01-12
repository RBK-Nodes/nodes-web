import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { approveFriendRequest, rejectFriendRequest } from '../../../chat_controller/controller.js'
function Request(props) {
    console.log('requsts', props.request)
    const [request, setRequest] = useState("");
    var accecptFriendReq = () => {
        approveFriendRequest(props.name, localStorage.getItem("username")).then(()=>{
            props.updater([]);
        })
    }
    var declineFriendReq = () => {
        rejectFriendRequest(props.name, localStorage.getItem("username"))
        props.updater([]);
    }
    return <div className="freind">
        <p>name :{props.name}</p>
        <p>id :{props.id}</p>

        <Button
            onClick={accecptFriendReq}
            variant="contained" color="primary">Accecpt</Button>
        <Button
            onClick={declineFriendReq} 
            variant="contained" color="secondary" style={{ marginLeft: "10px" }}>Decline</Button>
    </div>;
}

export default Request;
