import { useNavigate } from 'react-router-dom';
import { addInstitution } from '../../services/institution.service'

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

  return (
    <>
    <div>
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
                <button type='submit'>Add</button>
                <button onClick={onBackHandler}>Back</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddInstitution