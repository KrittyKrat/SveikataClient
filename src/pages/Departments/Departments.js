import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDepartments } from '../../services/department.service';
import Department from './Department';

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
            {role === "Admin" && <React.Fragment><button onClick={onAddHandler}>Add department</button></React.Fragment>}
            <button onClick={onBackHandler}>Back</button>
        </div>
    )
}

export default Departments