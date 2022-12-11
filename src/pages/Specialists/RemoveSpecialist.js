import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteSpecialist, getSpecialist } from '../../services/specialist.service';
import classes from "../HomePage.module.css";

const RemoveSpecialist = (props) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const { institutionId, departmentId, specialistId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}
        
        getSpecialist(institutionId, departmentId, specialistId).then((res) => {
            setName(res.name);
            setSurname(res.surname);
            setAge(res.age)
        })
    })

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        deleteSpecialist(institutionId, departmentId, specialistId).then((res) => {
            navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
        });
    }

  return (
    <>
    <div className={classes.main}>
        <h1>Remove Specialist</h1>
        <br />
        <form onSubmit={onSubmitHandler}>
            <div className={classes.second}>
                <h2>{name} {surname}</h2>
                <h3>{age}</h3>
            </div>
            <div>
                <button className={classes.button} type='submit'>Remove</button>
                <button className={classes.button} onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default RemoveSpecialist