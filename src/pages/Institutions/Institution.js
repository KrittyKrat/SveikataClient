import React from 'react'
import { useNavigate } from 'react-router-dom';

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
    <div>
        <p>{props.id}</p>
        <h2>{props.name}</h2>
        <h3>{props.adress}</h3>
        <p></p>
        {role === "Admin" &&
          <React.Fragment>
            <button onClick={onEditHandler}>Edit</button>
            <button onClick={onRemoveHandler}>Remove</button>
          </React.Fragment>
        }
        <button onClick={onViewDepartmentsHandler}>View Departments</button>
        <br /><br />
    </div>
  )
}

export default Institution