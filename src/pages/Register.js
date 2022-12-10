import { useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";

const Register = () => {

    const navigate = useNavigate();

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
    <>
    <h1>Register</h1>
    <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" required/>
            </div>
            <div>
                <label htmlFor="role">Role</label>
                <select name="role" id="role">
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div>
                <button type="submit">Register</button>
                <button onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Register