import React, { useState } from "react";
import Request from './request.jsx'
import { }
function FriendRequestList() {
        const friendList = [
            { id: 1, name: "Adam" },
            { id: 2, name: "Mohammed" },
            { id: 3, name: "Abdo" }
        ];

        return (
            <div className="requests"
                style={{
                    height: "200px"
                }}
            >
                {
                    friendList.map(friend => {
                        return <Request ket={friend.id} id={friend.id} name={friend.name} />;
                    })
                }
            </div >
        );
    }

export default FriendRequestList;