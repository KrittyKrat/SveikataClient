import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDepartments } from '../../services/department.service';
import Department from './Department';

const Departments = () => {
  
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
        getDepartments(institutionId).then((res) => {
            setDepartments(res);
        })
    }, [institutionId])

    return (
        <div>
            {departments?.map((dep) => <Department id={dep._id} key={dep._id} name={dep.name} description={dep.description}/>)}
            <button onClick={onAddHandler}>Add department</button>
            <button onClick={onBackHandler}>Back</button>
        </div>
    )
}

export default Departments