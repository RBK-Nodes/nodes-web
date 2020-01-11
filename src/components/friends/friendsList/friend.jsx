import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';

function Friend(props) {
    return (
        // <div className="friend"
        // >
        //     <form>
        //         <Button variant="contained" color="default"
        //         >{props.friend}</Button>
        //     </form>
        // </div>
        <li className="friend"><Button variant="contained" color="primary">{props.friend}</Button></li>

    )
}

export default Friend