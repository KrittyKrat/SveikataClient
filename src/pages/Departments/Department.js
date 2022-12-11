import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import classes from "../HomePage.module.css";

const Department = (props) => {

    let role = "None";
    const userTemp = localStorage.getItem("user");
    if(userTemp) role = JSON.parse(userTemp).role;

    var navigate = useNavigate();
    const { institutionId } = useParams();

    const onViewSpecialstsHandler = (event) => {
        navigate(`/institutions/${institutionId}/departments/${props.id}/specialists`)
    }

    const onEditHandler = (event) => {
        navigate(`/institutions/${institutionId}/editDepartment/${props.id}`)
    }

    const onRemoveHandler = (event) => {
        navigate(`/institutions/${institutionId}/removeDepartment/${props.id}`)
    }

    return (
        <div className={classes.list}>
            <div className={classes.second}>
                <h2>{props.name}</h2>
                <h3>{props.description}</h3>
            </div>
            <button className={classes.button} onClick={onViewSpecialstsHandler}>View Specialists</button>
            {role === "Admin" &&
                <React.Fragment>
                    <button className={classes.button} onClick={onEditHandler}>Edit</button>
                    <button className={classes.button} onClick={onRemoveHandler}>Remove</button>
                </React.Fragment>
            }
            <br />
        </div>
    )
}

export default Department