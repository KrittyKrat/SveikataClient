import React, { useState, useEffect } from 'react'
import Institution from './Institution';
import { getInstitutions } from "../../services/institution.service";
import { useNavigate } from 'react-router-dom';
import classes from "../HomePage.module.css";

const Institutions = () => {
  
  let role = "None";
  const userTemp = localStorage.getItem("user");
  if(userTemp) role = JSON.parse(userTemp).role;

  const [institutions, setInstitutions] = useState();
  const navigate = useNavigate();

  const onAddHandler = () => {
    navigate("/addInstitution");
  }

  const onBackHandler = () => {
    navigate("/");
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if(!user) navigate("/");

    getInstitutions().then((res) => {
      setInstitutions(res);
    })
  }, [navigate])

  return (
    <div>
      {institutions?.map((inst) => <Institution id={inst._id} key={inst._id} name={inst.name} adress={inst.adress}/>)}
      <div className={classes.main}>
        <div className={classes.second}>
          <h3>Look at all of these choices, click one! Or don't, I guess</h3>
        </div>
        {role === "Admin" && <React.Fragment><button className={classes.button} onClick={onAddHandler}>Add Institution</button></React.Fragment>}
        <button className={classes.button} onClick={onBackHandler}>Back</button>
      </div>
    </div>
  )
}

export default Institutions