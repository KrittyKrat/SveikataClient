import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getVisits } from '../../services/visits.service';
import Visit from './Visit';
import classes from "../HomePage.module.css";

const Visits = () => {
  
    const [visits, setVisits] = useState();
    const navigate = useNavigate();

    const onBackHandler = () => {
        navigate("/");
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}

        getVisits().then((res) => {
            setVisits(res);
        })
    }, [navigate])

    return (
        <div>
        {visits?.map((vis) => <Visit id={vis._id} key={vis._id} description={vis.description} specialistID={vis.specialistID} userID={vis.userID}/>)}
        <div className={classes.main}>
            <div className={classes.second}>
                <h3>This is an Admin only area, if you are not please locate the nearest exit.</h3>
            </div>
            <button className={classes.button} onClick={onBackHandler}>Back</button>
        </div>
        </div>
    )
}

export default Visits