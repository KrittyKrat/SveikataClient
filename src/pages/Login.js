import { login } from "../services/auth.service";
import { setUserData } from "../services/auth.storage";
import { setAuthToken } from "../services/authTest";

const Login = () => {

  const onSubmitHandler = (event) => {

    const username = event.target.username.value;
    const password = event.target.password.value;

    login(username, password).then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      setAuthToken(res.data.accessToken);
      //setUserData(res.accessToken, res.refreshToken);
    });

  };

  return (
    <>
    {localStorage.getItem("user")}
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