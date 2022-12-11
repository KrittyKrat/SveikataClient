import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import classes from "./HomePage.module.css";

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if(user) navigate("/");
  })

  const onBackHandler = () =>{
    navigate("/");
  }

  const onSubmitHandler = (event) => {

    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    login(username, password).then((res) => {

      const decoded = jwt_decode(res.accessToken);
      const user = { ...decoded, }

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", res.accessToken);
      navigate('/');
      window.location.reload();
    });

  };

  return (
    <div className={classes.main}>
      <h1>Login</h1>
      <br />
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required/>
          </div>
          <div>
            <button className={classes.button} type="submit">Login</button>
            <button className={classes.button} onClick={onBackHandler}>Back</button>
          </div>
        </form>
      </div>
    </div>
  )
  }

export default Login