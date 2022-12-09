import React from 'react'
import { useNavigate } from 'react-router-dom';

const Institution = (props) => {

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
        <button onClick={onViewDepartmentsHandler}>View Departments</button>
        <button onClick={onEditHandler}>Edit</button>
        <button onClick={onRemoveHandler}>Remove</button>
        <br /><br />
    </div>
  )
}

export default Institution