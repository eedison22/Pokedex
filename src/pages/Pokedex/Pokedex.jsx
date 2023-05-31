import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom';

import './Pokedex.css'
import { UserNameConext } from '../../context/UserNameContext'
import PokemonList from '../../components/Pokedex/PokemonList/PokemonList';
import FiltersForm from '../../components/Pokedex/FiltersForm/FiltersForm';

const Pokedex = () => {
    const { userName } = useContext(UserNameConext);
    const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
  
  return (
    <section>
        <p className='pokedex-message'>
            <em className='pokedex-message-username'>Bienvenido {userName}</em>, aqui podras encontrar tu pokemon favorito
        </p>
        
        <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/>

        {!pokemons.length ? (
            <p>No hay pokemones</p>
        ) : <PokemonList pokemons={pokemons}/>}

    </section>
  )
}

export default Pokedex