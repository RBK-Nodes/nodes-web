import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
function Request(props) {
    const [request, setRequest] = useState("");
    var accecptFriendReq = (id) => {
        //send a request to the database with userID
    }
    var declineFriendReq = () => {
        //send a request to the database with userID
    }
    return <div className="freind">
        <p>name :{props.name}</p>
        <p>id :{props.id}</p>
        <ButtonGroup size="large" color="" aria-label="">
            <Button onClick={accecptFriendReq(props.id)} variant="contained" color="primary">Accecpt</Button>
            <Button onClick={accecptFriendReq(props.id)} variant="contained" color="secondary" style={{ marginLeft: "10px" }}>Decline</Button>
        </ButtonGroup>


    </div>;
}

export default Request;
