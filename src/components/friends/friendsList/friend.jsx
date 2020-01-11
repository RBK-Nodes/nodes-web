import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';

function Friend(props) {
    return (
        <div className="friend"
        >
            <form>
                <Button variant="contained" color="default"
                //style={{ marginLeft: "10px" }} 
                >{props.friend}</Button>
            </form>
        </div>
    )
}

export default Friend