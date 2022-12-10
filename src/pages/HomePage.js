import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  let role = "None";
  const navigate = useNavigate();
  const userTemp = localStorage.getItem("user");
  if(userTemp) role = JSON.parse(userTemp).role;

  const onLoginHandler = () =>{
    navigate(`/login`);
  }

  const onRegisterHandler = () =>{
    navigate(`/register`);
  }

  const onLogoutHandler = () =>{

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate(`/`);
  }

  const onInstitutionsHandler = () =>{
    navigate(`/institutions`);
  }

  const onVisitsHandler = () =>{
    navigate(`/visits`);
  }

  const onUserVisitsHandler = () =>{
    const user = JSON.parse(localStorage.getItem("user"));
    navigate(`/users/${user.id}/visits`);
  }

  return (
    <div>
      <h1>Home</h1>
      {role === "None" &&
        <React.Fragment>
          <button onClick={onLoginHandler}>Login</button>
          <button onClick={onRegisterHandler}>Register</button>
        </React.Fragment>
      }
      {role !== "None" && 
        <React.Fragment>
          <button onClick={onLogoutHandler}>Logout</button>
          <button onClick={onInstitutionsHandler}>Institutions</button>
          <button onClick={onUserVisitsHandler}>My Visits</button>
        </React.Fragment>
      }
      {role === "Admin" && <React.Fragment><button onClick={onVisitsHandler}>All Visits</button></React.Fragment>}
    </div>
  )
}

export default HomePage