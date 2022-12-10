import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

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
        <div>
            <p>{props.id}</p>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            <p></p>
            {role === "Admin" &&
                <React.Fragment>
                    <button onClick={onEditHandler}>Edit</button>
                    <button onClick={onRemoveHandler}>Remove</button>
                </React.Fragment>
            }
            <button onClick={onViewSpecialstsHandler}>View Specialists</button>
            <br /><br />
        </div>
    )
}

export default Department