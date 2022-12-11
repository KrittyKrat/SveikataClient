import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecialist, updateSpecialist } from '../../services/specialist.service';
import classes from "../HomePage.module.css";

const EditSpecialist = (props) => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const ageRef = useRef();
    const { institutionId, departmentId, specialistId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}
        
        getSpecialist(institutionId, departmentId, specialistId).then((res) => {
            nameRef.current.value = res.name;
            surnameRef.current.value = res.surname;
            ageRef.current.value = res.age;
        })
    })

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const age = event.target.age.value;
        
        updateSpecialist(institutionId, departmentId, specialistId, name, surname, age).then((res) => {
            navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
        });
    }

  return (
    <div className={classes.main}>
        <h1>Edit Specialist</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input ref={nameRef} type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input ref={surnameRef} type="text" id="surname" required />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input ref={ageRef} type="number" id="age" required />
            </div>
            <div>
                <button className={classes.button} type="submit">Done</button>
                <button className={classes.button} onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
  )
}

export default EditSpecialist