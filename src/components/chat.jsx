import React from "react";
import io from 'socket.io-client';
io('http://localhost:5000')
//{ useState }
export function Chat(props) {
    //using hooks
    var socketHandler = () => {

    }

    return (
        <div>


            THIS is the CHAT SECTION
            <br />
            <button onClick={socketHandler}>CLICK ME</button>

        </div>
    )
}
