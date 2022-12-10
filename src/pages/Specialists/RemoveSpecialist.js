import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteSpecialist, getSpecialist } from '../../services/specialist.service';

const RemoveSpecialist = (props) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const { institutionId, departmentId, specialistId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}
        
        getSpecialist(institutionId, departmentId, specialistId).then((res) => {
            setName(res.name);
            setSurname(res.surname);
            setAge(res.age)
        })
    })

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        deleteSpecialist(institutionId, departmentId, specialistId).then((res) => {
            navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
        });
    }

  return (
    <>
    <div>
        <h1>Remove Specialist</h1>
        <form onSubmit={onSubmitHandler}>
            <h2>{name} {surname}</h2>
            <h3>{age}</h3>
            <div>
                <button type='submit'>Remove</button>
            </div>
            <div>
                <button onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default RemoveSpecialist