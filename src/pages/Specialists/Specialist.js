import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addVisit } from '../../services/visits.service';

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
        <div>
            <p>{props.id}</p>
            <h2>{props.name} {props.surname}</h2>
            <h3>{props.age}</h3>
            <p></p>
            {role === "Admin" &&
                <React.Fragment>
                    <button onClick={onEditHandler}>Edit</button>
                    <button onClick={onRemoveHandler}>Remove</button>
                </React.Fragment>
            }
            <button onClick={onVisitHandler}>Arrange Visit</button>
            <br /><br />
        </div>
    )
}

export default Specialist