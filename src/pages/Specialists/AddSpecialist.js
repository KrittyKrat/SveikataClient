import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addSpecialist } from '../../services/specialist.service';

const AddSpecialist = () => {

    const navigate = useNavigate();
    const { institutionId, departmentId } = useParams();

    const onBackHandler = () =>{
        navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const age = event.target.age.value;
        
        addSpecialist(institutionId, departmentId, name, surname, age).then((res) => {
            navigate(`/institutions/${institutionId}/departments/${departmentId}/specialists`);
        });
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(!user) navigate("/");
        else { const userData = JSON.parse(user); if(userData.role !== "Admin") navigate("/");}
    })


  return (
    <>
    <div>
        <h1>Add Specialist</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" required />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" required />
            </div>
            <div>
                <button type='submit'>Add</button>
                <button onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddSpecialist