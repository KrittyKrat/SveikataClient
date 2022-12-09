import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Specialist = (props) => {
    var navigate = useNavigate();
    const { institutionId, departmentId } = useParams();

    const onEditHandler = (event) => {
        navigate(`/institutions/${institutionId}/departments/${departmentId}/editSpecialist/${props.id}`)
    }

    const onRemoveHandler = (event) => {
        navigate(`/institutions/${institutionId}/departments/${departmentId}/removeSpecialist/${props.id}`)
    }

    return (
        <div>
            <p>{props.id}</p>
            <h2>{props.name} {props.surname}</h2>
            <h3>{props.age}</h3>
            <p></p>
            <button onClick={onEditHandler}>Edit</button>
            <button onClick={onRemoveHandler}>Remove</button>
            <br /><br />
        </div>
    )
}

export default Specialist