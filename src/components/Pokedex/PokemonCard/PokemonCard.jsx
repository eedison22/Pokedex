import { useEffect, useState } from 'react'
import './PokemonCard.css'
import { getPokemonById } from '../../../services/getPokemonById';

const targetStats = ['hp', 'attack', 'defense', 'speed'];

const PokemonCard = ({ pokemonId }) => {

    const [pokemon, setPokemon] = useState(null);

    const stats = pokemon?.stats.filter(stat => targetStats.includes(stat.name.toLowerCase()));

    useEffect(()=>{
        const loadPokemon = async () => {
            const pokemonData = await getPokemonById(pokemonId);
            setPokemon(pokemonData);
        }
        loadPokemon();
    },[]);

  return (
    <article className='pokemon-card'>
        { !pokemon && <p>Loading</p>}

        { pokemon && (
        <div className='pokemon-card-2'>
            <div className='pokemon-image'>
                <img src={pokemon.image} alt={pokemon.name}/>
            </div>
            <h2 className='pokemon-title'>{pokemon.name}</h2>
            <section className='pokemon-type'>
                <h3>Tipo</h3>
                    <ul>
                        {pokemon.types.map(type => (
                            <li key={type}>{type}</li>
                        ))}
                    </ul>
            </section>
            <section className='pokemon-stats'>
                <h3>Stats</h3>
                    <ul>
                        {stats.map(stat => (
                            <li key={stat.name}>
                                <p><em>{stat.name.toUpperCase()}    </em> 
                                <span>  {stat.value}</span></p>
                            </li>
                        ))}
                    </ul>
            </section>
        </div>
        )}
        
    </article>
  )
}

export default PokemonCard