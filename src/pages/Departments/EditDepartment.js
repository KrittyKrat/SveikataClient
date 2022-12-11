import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDepartment, updateDepartment } from '../../services/department.service';
import classes from "../HomePage.module.css";

const EditDepartment = (props) => {

    const nameRef = useRef();
    const descriptionRef = useRef();
    const { institutionId, departmentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}

        getDepartment(institutionId, departmentId).then((res) => {
            nameRef.current.value = res.name;
            descriptionRef.current.value = res.description;
        })
    })

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        
        updateDepartment(institutionId, departmentId, name, description).then((res) => {
            navigate(`/institutions/${institutionId}/departments`);
        });
    }

  return (
    <>
    <div className={classes.main}>
        <h1>Edit Department</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input ref={nameRef} type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="description">Adress</label>
                <input ref={descriptionRef} type="text" id="description" required />
            </div>
            <div>
                <button className={classes.button} type="submit">Done</button>
                <button className={classes.button} onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditDepartment