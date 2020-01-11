import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';

function Friend(props) {
    return (
        <li className="friend"><Button variant="contained" color="primary">{props.friend}</Button></li>
    )
}

export default Friend