import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInstitution, getInstitution } from '../../services/institution.service';

const RemoveInstitution = (props) => {

    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const { institutionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getInstitution(institutionId).then((res) => {
            setName(res.name);
            setAdress(res.adress);
        })
    })

    const onBackHandler = () =>{
        navigate("/institutions");
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        deleteInstitution(institutionId).then((res) => {
            navigate("/institutions");
        });
    }

  return (
    <>
    <div>
        <h1>Remove Institution</h1>
        <form onSubmit={onSubmitHandler}>
            <h2>{name}</h2>
            <h3>{adress}</h3>
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

export default RemoveInstitution