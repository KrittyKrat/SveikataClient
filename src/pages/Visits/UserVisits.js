import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getUserVisits } from '../../services/visits.service';
import Visit from './Visit';
import classes from "../HomePage.module.css";

const UserVisits = () => {
  
    const { userId } = useParams();
    const [ visits, setVisits ] = useState();
    const navigate = useNavigate();

    const onBackHandler = () => {
        navigate("/");
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");

        getUserVisits(userId).then((res) => {
            setVisits(res);
        })
    }, [userId, navigate])

    return (
        <div>
        {visits?.map((vis) => <Visit id={vis._id} key={vis._id} description={vis.description} specialistID={vis.specialistID} userID={vis.userID}/>)}
        <div className={classes.main}>
            <div className={classes.second}>
                <h3>These are the visits you have!</h3>
            </div>
            <button className={classes.button} onClick={onBackHandler}>Back</button>
        </div>
        </div>
    )
}

export default UserVisits