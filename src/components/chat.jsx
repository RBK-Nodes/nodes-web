import React from "react";
import io from 'socket.io-client';

export function Chat(props) {
    //using hooks

    var socketHandler = () => {
        io('http://localhost:5000').on('connect', () => {
            console.log('connected!')
        })

    }

    return (
        <div>


            THIS is the CHAT SECTION
            <br />
            <button onClick={socketHandler}>CLICK ME</button>

        </div>
    )
}
