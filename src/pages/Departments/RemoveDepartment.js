import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDepartment, getDepartment } from '../../services/department.service';
import classes from "../HomePage.module.css";

const RemoveDepartment = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { institutionId, departmentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}

        getDepartment(institutionId, departmentId).then((res) => {
            setName(res.name);
            setDescription(res.description);
        })
    })

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        deleteDepartment(institutionId, departmentId).then((res) => {
            navigate(`/institutions/${institutionId}/departments`);
        });
    }

  return (
    <>
    <div className={classes.main}>
        <h1>Remove Department</h1>
        <br />
        <form onSubmit={onSubmitHandler}>
            <div className={classes.second}>
                <h2>{name}</h2>
                <h3>{description}</h3>
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

export default RemoveDepartment