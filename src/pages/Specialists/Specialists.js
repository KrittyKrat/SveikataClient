import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecialists } from '../../services/specialist.service';
import Specialist from './Specialist';
import classes from "../HomePage.module.css";

const Specialists = () => {
  
    let role = "None";
    const userTemp = localStorage.getItem("user");
    if(userTemp) role = JSON.parse(userTemp).role;

    const [specialists, setSpecialists] = useState();
    const navigate = useNavigate();
    const { institutionId, departmentId } = useParams();

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments`);
    }

    const onAddHandler = () => {
        navigate(`/institutions/${institutionId}/departments/${departmentId}/addSpecialist`);
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");

        getSpecialists(institutionId, departmentId).then((res) => {
            setSpecialists(res);
        })
    }, [institutionId, departmentId, navigate])

    return (
        <div>
            {specialists?.map((spec) => <Specialist id={spec._id} key={spec._id} name={spec.name} surname={spec.surname} age={spec.age}/>)}
            <div className={classes.main}>
                <div className={classes.second}>
                    <h3>This is it. MAKE YOUR CHOICE...</h3>
                </div>
                {role === "Admin" && <React.Fragment><button className={classes.button} onClick={onAddHandler}>Add specialist</button></React.Fragment>}
                <button className={classes.button} onClick={onBackHandler}>Back</button>
            </div>
        </div>
    )
}

export default Specialists