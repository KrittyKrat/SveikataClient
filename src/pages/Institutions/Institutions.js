import React, { useState, useEffect } from 'react'
import Institution from './Institution';
import { getInstitutions } from "../../services/institution.service";
import { useNavigate } from 'react-router-dom';

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
      {role === "Admin" && <React.Fragment><button onClick={onAddHandler}>Add Institution</button></React.Fragment>}
      <button onClick={onBackHandler}>Back</button>
    </div>
  )
}

export default Institutions