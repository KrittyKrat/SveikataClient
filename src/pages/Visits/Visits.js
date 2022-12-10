import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getVisits } from '../../services/visits.service';
import Visit from './Visit';

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
        <button onClick={onBackHandler}>Back</button>
        </div>
    )
}

export default Visits