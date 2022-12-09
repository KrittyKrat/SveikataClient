import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecialists } from '../../services/specialist.service';
import Specialist from './Specialist';

const Specialists = () => {
  
    const [specialists, setSpecialists] = useState();
    const navigate = useNavigate();
    const { institutionId, departmentId } = useParams();

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments`);
    }

    const onAddHandler = () => {
        navigate(`/institutions/${institutionId}/departments/${departmentId}/addSpecialist`);
    }

    useEffect(() => {
        getSpecialists(institutionId, departmentId).then((res) => {
            setSpecialists(res);
        })
    }, [institutionId, departmentId])

    return (
        <div>
            {specialists?.map((spec) => <Specialist id={spec._id} key={spec._id} name={spec.name} surname={spec.surname} age={spec.age}/>)}
            <button onClick={onAddHandler}>Add specialist</button>
            <button onClick={onBackHandler}>Back</button>
        </div>
    )
}

export default Specialists