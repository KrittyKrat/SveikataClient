import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getUserVisits } from '../../services/visits.service';
import Visit from './Visit';

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
        <button onClick={onBackHandler}>Back</button>
        </div>
    )
}

export default UserVisits