import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addVisit } from '../../services/visits.service';
import classes from "../HomePage.module.css";

const Specialist = (props) => {

    let role = "None";
    const userTemp = localStorage.getItem("user");
    if(userTemp) role = JSON.parse(userTemp).role;

    var navigate = useNavigate();
    const { institutionId, departmentId } = useParams();

    const onEditHandler = (event) => {
        navigate(`/institutions/${institutionId}/departments/${departmentId}/editSpecialist/${props.id}`)
    }

    const onRemoveHandler = (event) => {
        navigate(`/institutions/${institutionId}/departments/${departmentId}/removeSpecialist/${props.id}`)
    }

    const onVisitHandler = (event) => {
        
        const userId = JSON.parse(localStorage.getItem("user")).id;

        addVisit(userId, "Add description please", props.id).then((res) => {
            navigate(`/users/${userId}/visits`);
        });
    }

    return (
        <div className={classes.list}>
            <div className={classes.second}>
                    <h2>{props.name} {props.surname}</h2>
                    <h3>{props.age}</h3>
                </div>
                {role === "Admin" &&
                <React.Fragment>
                    <button className={classes.button} onClick={onEditHandler}>Edit</button>
                    <button className={classes.button} onClick={onRemoveHandler}>Remove</button>
                </React.Fragment>
                }
                <button className={classes.button} onClick={onVisitHandler}>Arrange Visit</button>
                <br />
        </div>
    )
}

export default Specialist