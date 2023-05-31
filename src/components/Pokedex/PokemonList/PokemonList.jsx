import { useState } from "react"
import { usePagination } from "../../../hooks/usePagination";

import Pagination from "../Pagination/Pagination";
import PokemonCard from "../PokemonCard/PokemonCard"
import './PokemonList.css'
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }) => {
    const [pokemonsPerPage, setPokemonsPerPage] = useState(21);
    const [currentPage, totalPages, pokemonsSlice, changePageTo] = usePagination(pokemons, pokemonsPerPage);
  return (
    <section>
        <Pagination 
        totalPages={totalPages} 
        onChangePage={changePageTo} 
        onNextPage={()=>changePageTo(currentPage+1)} 
        onBackPage={()=>changePageTo(currentPage-1)} />

        <ul className="pokedex-list">
            {pokemonsSlice.map((pokemon) => 
            <li key={pokemon.url}>
              <Link style={{color: "unset", textDecoration:"unset"}}
              to={`/pokedex/${pokemon.url.split('/').at(-2)}`}>
                <PokemonCard pokemonId={pokemon.url.split('/').at(-2)}/>
              </Link>
            </li>)}
        </ul>

         <Pagination 
        totalPages={totalPages} 
        onChangePage={changePageTo} 
        onNextPage={()=>changePageTo(currentPage+1)}  
        onBackPage={()=>changePageTo(currentPage-1)} />
    </section>
  )
}

export default PokemonList