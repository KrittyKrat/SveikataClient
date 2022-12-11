import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";
import classes from "./HomePage.module.css";

const Register = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(user) navigate("/");
    })

    const onBackHandler = () =>{
        navigate("/");
    }

    const onSubmitHandler = (event) =>{

        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;
        const role = event.target.role.value;

        register(username, password, role).then((res) => {
            navigate("/login");
        });
    };

  return (
    <div className={classes.main}>
        <h1>Register</h1>
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
                    <label htmlFor="role">Role</label>
                    <select name="role" id="role">
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <div>
                    <button className={classes.button} type="submit">Register</button>
                    <button className={classes.button} onClick={onBackHandler}>Back</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register