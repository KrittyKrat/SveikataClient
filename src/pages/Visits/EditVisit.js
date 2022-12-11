import { useState } from 'react';
import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getOneSpecialist } from '../../services/specialist.service';
import { getVisit, updateVisit } from '../../services/visits.service';
import classes from "../HomePage.module.css";

const EditVisit = (props) => {

    const descriptionRef = useRef();
    const { userId, visitId } = useParams();
    const [specialistName, setSpecialist] = useState('');
    const [specialistId, setSpecialistId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");

        getVisit(userId, visitId).then((res) => {
            descriptionRef.current.value = res.description;
            setSpecialistId(res.specialistID);
            getOneSpecialist(res.specialistID).then((res2) => {
                setSpecialist(res2.name + " " + res2.surname);
            })
        })
    })

    const onBackHandler = () =>{
        navigate(`/users/${userId}/visits`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const description = event.target.description.value;
        
        updateVisit(userId, visitId, description, specialistId).then((res) => {
            navigate(`/users/${userId}/visits`);
        });
    }

  return (
    <div className={classes.main}>
        <h1>Edit Visit</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Specialist</label>
                <h2 className={classes.second}>{specialistName}</h2>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input ref={descriptionRef} type="text" id="description" required />
            </div>
            <div>
                <button className={classes.button} type="submit">Done</button>
                <button className={classes.button} onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
  )
}

export default EditVisit