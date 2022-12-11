import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import classes from "./Footer.module.css";

const Footer = () => {

    const [username, setUsername] = useState();

    useEffect(() => {
        const userTemp = localStorage.getItem("user");
        if(userTemp) setUsername(JSON.parse(userTemp).username);
        else setUsername("visitor");
    }, [username])

    return (
        <footer className={classes.footer}>
            <p>Welcome {username}!</p>
        </footer>
        )
}

export default Footer