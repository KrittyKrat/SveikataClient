import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getInstitution, updateInstitution } from '../../services/institution.service'
import classes from "../HomePage.module.css";

const EditInstitution = (props) => {

    const nameRef = useRef();
    const adressRef = useRef();
    const { institutionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}

        getInstitution(institutionId).then((res) => {
            nameRef.current.value = res.name;
            adressRef.current.value = res.adress;
        })
    })

    const onBackHandler = () =>{
        navigate("/institutions");
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const adress = event.target.adress.value;
        
        updateInstitution(institutionId, name, adress).then((res) => {
            navigate("/institutions");
        });
    }

  return (
    <>
    <div className={classes.main}>
        <h1>Edit Institution</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input ref={nameRef} type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="adress">Adress</label>
                <input ref={adressRef} type="text" id="adress" required />
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

export default EditInstitution