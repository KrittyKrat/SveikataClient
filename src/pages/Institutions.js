import React, { useState, useEffect } from 'react'
import { getInstitutions } from "../services/institution.service";

const Institutions = () => {
  
  const [institutions, setInstitutions] = useState();

  useEffect(() => {
    getInstitutions().then((res) => {
      setInstitutions(res);
    })
  }, [])

  return (
    <div>
      Test
    </div>
  )
}

export default Institutions