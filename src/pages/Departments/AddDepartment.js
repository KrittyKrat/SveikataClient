import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addDepartment } from '../../services/department.service';
import classes from "../HomePage.module.css";

const AddDepartment = () => {

    const navigate = useNavigate();
    const { institutionId } = useParams();

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const discription = event.target.discription.value;
        
        addDepartment(institutionId, name, discription).then((res) => {
            navigate(`/institutions/${institutionId}/departments`);
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
        <h1>Add Department</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="discription">Description</label>
                <input type="text" id="discription" required />
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

export default AddDepartment