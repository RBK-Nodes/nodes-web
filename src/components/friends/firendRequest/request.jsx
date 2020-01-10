import React, { useState } from "react";

function Request(props) {
    const [request, setRequest] = useState("");
    return <div className="freind">
        <p>name :{props.name}</p>
        <p>id :{props.id}</p>
    </div>;
}

export default Request;
