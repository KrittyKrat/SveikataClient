import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addInstitution } from '../../services/institution.service'
import classes from "../HomePage.module.css";

const AddInstitution = () => {

    const navigate = useNavigate();

    const onBackHandler = () =>{
        navigate("/institutions");
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const adress = event.target.adress.value;
        
        addInstitution(name, adress).then((res) => {
            navigate("/institutions");
        });
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}
    })

  return (
    <>
    <div className={classes.main}>
        <h1>Add Institution</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="adress">Adress</label>
                <input type="text" id="adress" required />
            </div>
            <div>
                <button className={classes.button} type='submit'>Add</button>
                <button className={classes.button} onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddInstitution