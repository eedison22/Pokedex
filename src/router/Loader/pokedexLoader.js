import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonByType } from "../../services/getPokemonsByType";

export const pokedexLoader = async ({ request }) => {
    const url = new URL(request.url);
    const pokemonName = url.searchParams.get("pokemonName") ?? "";
    const pokemonTypeId = url.searchParams.get("pokemonType") ?? "";

    let pokemons;

    if (pokemonName && pokemonTypeId) {
        pokemons = await getPokemonByType(pokemonTypeId);
        pokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
    }
    else if (!pokemonName && !pokemonTypeId) {
        pokemons = await getAllPokemons();
    }
    else if (pokemonName) {
        pokemons = await getAllPokemons();
        pokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
    }
    else if (pokemonTypeId) {
        pokemons = await getPokemonByType(pokemonTypeId);
    }

    return { pokemons, pokemonName, pokemonTypeId };
};

