import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

const Login = () => {

  const navigate = useNavigate();

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
    });

  };

  return (
    <>
    <h1>Login</h1>
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
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
    </>
  )
  }

export default Login