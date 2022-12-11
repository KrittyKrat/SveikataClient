import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInstitution, getInstitution } from '../../services/institution.service';
import classes from "../HomePage.module.css";

const RemoveInstitution = (props) => {

    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const { institutionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}

        getInstitution(institutionId).then((res) => {
            setName(res.name);
            setAdress(res.adress);
        })
    })

    const onBackHandler = () =>{
        navigate("/institutions");
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        deleteInstitution(institutionId).then((res) => {
            navigate("/institutions");
        });
    }

  return (
    <>
    <div className={classes.main}>
        <h1>Remove Institution</h1>
        <br />
        <form onSubmit={onSubmitHandler}>
            <div className={classes.second}>
                <h2>{name}</h2>
                <h3>{adress}</h3>
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

export default RemoveInstitution