import { useParams } from 'react-router'

const PokemonPage = () => {
  const { pokemonId } = useParams();

  return (
    <div>
      <h1>Informacion detallada del pokemon id={pokemonId}</h1>
    </div>
  )
}

export default PokemonPage