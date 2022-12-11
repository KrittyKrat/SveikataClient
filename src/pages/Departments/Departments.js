import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDepartments } from '../../services/department.service';
import Department from './Department';
import classes from "../HomePage.module.css";

const Departments = () => {
    
    let role = "None";
    const userTemp = localStorage.getItem("user");
    if(userTemp) role = JSON.parse(userTemp).role;

    const [departments, setDepartments] = useState();
    const navigate = useNavigate();
    const { institutionId } = useParams();

    const onBackHandler = () =>{
        navigate(`/institutions`);
    }

    const onAddHandler = () => {
        navigate(`/institutions/${institutionId}/addDepartment`);
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");

        getDepartments(institutionId).then((res) => {
            setDepartments(res);
        })
    }, [institutionId, navigate])

    return (
        <div>
            {departments?.map((dep) => <Department id={dep._id} key={dep._id} name={dep.name} description={dep.description}/>)}
            <div className={classes.main}>
                <div className={classes.second}>
                    <h3>You have arrived at the department section, I hope you enjoy your stay.</h3>
                </div>
                {role === "Admin" && <React.Fragment><button className={classes.button} onClick={onAddHandler}>Add department</button></React.Fragment>}
                <button className={classes.button} onClick={onBackHandler}>Back</button>
            </div>
        </div>
    )
}

export default Departments