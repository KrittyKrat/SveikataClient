import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDepartment, getDepartment } from '../../services/department.service';

const RemoveDepartment = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { institutionId, departmentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}

        getDepartment(institutionId, departmentId).then((res) => {
            setName(res.name);
            setDescription(res.description);
        })
    })

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        deleteDepartment(institutionId, departmentId).then((res) => {
            navigate(`/institutions/${institutionId}/departments`);
        });
    }

  return (
    <>
    <div>
        <h1>Remove Department</h1>
        <form onSubmit={onSubmitHandler}>
            <h2>{name}</h2>
            <h3>{description}</h3>
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

export default RemoveDepartment