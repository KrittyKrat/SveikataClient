import React, { useState, useEffect } from 'react'
import Institution from './Institution';
import { getInstitutions } from "../../services/institution.service";
import { useNavigate } from 'react-router-dom';

const Institutions = () => {
  
  const [institutions, setInstitutions] = useState();
  const navigate = useNavigate();

  const onAddHandler = () => {
    navigate("/addInstitution");
  }

  useEffect(() => {
    getInstitutions().then((res) => {
      setInstitutions(res);
    })
  }, [])

  return (
    <div>
      {institutions?.map((inst) => <Institution id={inst._id} key={inst._id} name={inst.name} adress={inst.adress}/>)}
      <button onClick={onAddHandler}>Add Institution</button>
    </div>
  )
}

export default Institutions