import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDepartment, updateDepartment } from '../../services/department.service';

const EditDepartment = (props) => {

    const nameRef = useRef();
    const descriptionRef = useRef();
    const { institutionId, departmentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDepartment(institutionId, departmentId).then((res) => {
            nameRef.current.value = res.name;
            descriptionRef.current.value = res.description;
            console.log(descriptionRef);
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
    <div>
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
                <button type="submit">Done</button>
                <button onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditDepartment