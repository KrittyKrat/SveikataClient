import React from 'react'
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/icon.svg"

const Header = () => {

    let role = "None";
    const userTemp = localStorage.getItem("user");
    if(userTemp) role = JSON.parse(userTemp).role;
    const navigate = useNavigate();

    const onLoginHandler = () =>{
        navigate(`/login`);
    }

    const onRegisterHandler = () =>{
        navigate(`/register`);
    }

    const onLogoutHandler = () =>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();
    }

    const onInstitutionsHandler = () =>{
        navigate(`/institutions`);
    }

    const onHomeHandler = () =>{
        navigate(`/`);
    }

    const onVisitsHandler = () =>{
        navigate(`/visits`);
    }

    const onUserVisitsHandler = () =>{
        const user = JSON.parse(localStorage.getItem("user"));
        navigate(`/users/${user.id}/visits`);
    }

    return (
        <header className={classes.header}>
            <div className={classes.navigation}>
                <img onClick={onHomeHandler} className={classes.icon} src={logo} alt='RIP'/>
            </div>
            <div className={classes.navigation} > 
                {role === "None" && (
                    <button className={classes.button} onClick={onLoginHandler}>Login</button>
                )}
            </div>
            <div className={classes.navigation} > 
                {role === "None" && (
                    <button className={classes.button} onClick={onRegisterHandler}>Register</button>
                )}
            </div>
            <div className={classes.navigation} > 
                {role !== "None" && (
                    <button className={classes.button} onClick={onInstitutionsHandler}>Institutions</button>
                )}
            </div>
            <div className={classes.navigation} > 
                {role !== "None" && (
                    <button className={classes.button} onClick={onUserVisitsHandler}>My Visits</button>
                )}
            </div>
            <div className={classes.navigation} > 
                {role === "Admin" && (
                    <button className={classes.button} onClick={onVisitsHandler}>All Visits</button>
                )}
            </div>
            <div className={classes.navigation} > 
                {role !== "None" && (
                    <button className={classes.button} onClick={onLogoutHandler}>Logout</button>
                )}
            </div>
        </header>
    )
}

export default Header