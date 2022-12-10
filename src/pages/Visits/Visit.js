import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../services/auth.service';
import { getOneSpecialist } from '../../services/specialist.service';
import { removeVisit } from '../../services/visits.service';

const Visit = (props) => {

  var navigate = useNavigate();
  const [specialistName, setSpecialist] = useState('');
  const [username, setUsername] = useState('');

  const onEditHandler = (event) => {
    navigate(`/users/${props.userID}/editVisit/${props.id}`)
  }

  const onRemoveHandler = (event) => {
    
    removeVisit(props.userID, props.id).then((res) => {
        window.location.reload();
    })
  }

    useEffect(() => {
        getOneSpecialist(props.specialistID).then((res) => {
            setSpecialist(res.name + " " + res.surname);
            getUser(props.userID).then((res2) => {
                setUsername(res2.username);
            })
        })
    }, [props.specialistID, props.userID])

  return (
    <div>
        <p>{props.id}</p>
        <h2>{specialistName}</h2>
        <h3>{username}</h3>
        <p>{props.description}</p>
        <p></p>
        <button onClick={onEditHandler}>Edit</button>
        <button onClick={onRemoveHandler}>Remove</button>
        <br /><br />
    </div>
  )
}

export default Visit