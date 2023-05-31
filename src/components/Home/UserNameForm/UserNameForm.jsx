import { useRef, useState } from 'react'
import './UserNameForm.css'

const UserNameForm = ({ onSendName }) => {
    const [userNameValue, setUserNameValue] = useState('');
    const [nameError, setNameError] = useState('');
    const hasInputAlreadyTouched = useRef(false);

    const handleChange = (e) => {
        const nameValue = e.target.value;
        
        if (!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;

        if (!nameValue) setNameError('El nombre esta vacio!');
        else if (/[^a-z ]/i.test(nameValue)) setNameError('Solo se permiten letras y espacios!');
        else if (!/^[a-z]{2,} ?$/i.test(nameValue)) setNameError('El nombre debe tener mas de 2 letras!');
        else setNameError('');

        setUserNameValue(nameValue);        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!nameError && hasInputAlreadyTouched.current) onSendName(userNameValue);
    };
    
  return (
    <form onSubmit={handleSubmit}>
        { Boolean(nameError) && <p>{nameError}</p> }
        <input onChange={handleChange} type='text' placeholder='Tu nombre...' value={userNameValue}/>
        <button type='submit'>Comenzar</button>
    </form>
  )
}

export default UserNameForm