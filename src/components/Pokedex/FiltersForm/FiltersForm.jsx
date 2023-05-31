import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

import './FiltersForm.css'
import { getAllTypes } from '../../../services/getAllTypes'

const FiltersForm = ({nameInitial, typeInitial}) => {
    const [types, setTypes] = useState([])
    const [nameValue, setNameValue] = useState(nameInitial);
    const [typeValue, setTypeValue] = useState(typeInitial);
    
    useEffect(() => {
        const loadTypes = async () => {
            const typeList = await getAllTypes();
            setTypes(typeList);
        };
        loadTypes();
    }, []);

    useEffect(()=> {
        setNameValue(nameInitial);
        setTypeValue(typeInitial);
        
    }, [nameInitial, typeInitial]);
        
    const handleTypeChange = (e) => {
        const newTypeValue = e.target.value;
        setTypeValue(newTypeValue);
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        setNameValue(newValue);
    };

  return (
    <Form className='pokemon-name'>
        <h2>Filtros para la busqueda</h2>
        <div className='pokemon-input'>
            <input
            value={nameValue}
            onChange={handleChange} 
            className='name-input'
            type="text"
            name="pokemonName"
            placeholder='Escribe el nombre de tu pokemon' />
            <select className="select-input" value={typeValue} onChange={handleTypeChange} name='pokemonType'>
                { types.map((type) => (<option key={type.id} value={type.id}>{type.name}</option>)) }
            </select>
        </div>
            <button className='input-button'>Buscar</button>
    </Form>
  )
}

export default FiltersForm