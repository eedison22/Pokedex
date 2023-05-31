import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { getPokemonById } from '../../services/getPokemonById';

import './PokemonPage.css'

const targetStats = ['hp', 'attack', 'defense', 'speed', "special-attack", "special-defense"];

const PokemonPage = () => { 
  const [pokemon, setPokemon] = useState(null);

  const stats = pokemon?.stats.filter(stat => targetStats.includes(stat.name.toLowerCase()));

  useEffect(()=>{
      const loadPokemon = async () => {
          const pokemonData = await getPokemonById(pokemonId);
          setPokemon(pokemonData);
      }
      loadPokemon();
  },[]);

  const { pokemonId } = useParams();

  return (
    <article className='pokemon-detail'>
        { !pokemon && <p>Loading</p>}

        { pokemon && (
        <div className='pokemon-detail-card'>
            <div className='pokemon-image'>
                <img src={pokemon.image} alt={pokemon.name}/>
                <h2 className='pokemon-title'>{pokemon.name}</h2>
            </div>
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
            <section className='pokemon-abilities'>
              <h3>Habilidades</h3>
              <ul>
                {pokemon.hability.map(hability => (
                  <li key={hability}>
                    <p>{hability}</p>
                  </li>
                ))}
              </ul>
            </section>
        </div>
        )}
        
    </article>
  )
}

export default PokemonPage