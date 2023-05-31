import { axiosInstance } from "../api/axiosInstance";

export const getPokemonByType = async (typeId) => {
    try {
        const res = await axiosInstance.get(`type/${typeId}`);

        return res.data.pokemon.map(pokemonData => pokemonData.pokemon);
    } catch (error) {
        console.log(error)
    }
};