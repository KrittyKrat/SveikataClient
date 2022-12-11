import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from "../HomePage.module.css";

const Institution = (props) => {

  let role = "None";
  const userTemp = localStorage.getItem("user");
  if(userTemp) role = JSON.parse(userTemp).role;

  var navigate = useNavigate();

  const onViewDepartmentsHandler = (event) => {
    navigate(`/institutions/${props.id}/departments`)
  }

  const onEditHandler = (event) => {
    navigate(`/editInstitution/${props.id}`)
  }

  const onRemoveHandler = (event) => {
    navigate(`/removeInstitution/${props.id}`)
  }

  return (
    <div className={classes.list}>
        <div className={classes.second}>
          <h2>{props.name}</h2>
          <h3>{props.adress}</h3>
        </div>
        <button className={classes.button} onClick={onViewDepartmentsHandler}>View Departments</button>
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

export default Institution