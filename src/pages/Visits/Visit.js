import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../services/auth.service';
import { getOneSpecialist } from '../../services/specialist.service';
import { removeVisit } from '../../services/visits.service';
import classes from "../HomePage.module.css";

const Visit = (props) => {

  var navigate = useNavigate();
  var modal = document.getElementById("myModal");
  const [specialistName, setSpecialist] = useState('');
  const [username, setUsername] = useState('');

  let role = "None";
  const userTemp = localStorage.getItem("user");
  if(userTemp) role = JSON.parse(userTemp).role;

  const onEditHandler = (event) => {
    navigate(`/users/${props.userID}/editVisit/${props.id}`)
  }

  const onRemoveHandler = (event) => {
    
    removeVisit(props.userID, props.id).then((res) => {
        window.location.reload();
    })
  }

  const toggleModal = (event) => {
    modal.style.display = "block";
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
    <>
    <div class="overlay hidden"></div>
    <button class="btn btn-open">Open Modal</button>
    <div className={classes.list}>
        <div className={classes.second}>
          <h2>{specialistName}</h2>
          {role === "Admin" && (
            <h4>User: {username}</h4>
          )}
          <p>{props.description}</p>
        </div>
        <button className={classes.button} onClick={onEditHandler}>Edit</button>
        <button id="myModal" className={classes.button} onClick={toggleModal}>Remove</button>
        <br />
    </div>
    </>
  )
}

export default Visit