import { register } from "../services/auth.service";

const Register = () => {

    const onSubmitHandler = (event) =>{

        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;
        const role = event.target.role.value;

        register(username, password, role);
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
                <input type="text" id="role" required/>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Register