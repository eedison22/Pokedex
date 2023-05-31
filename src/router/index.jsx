import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./Loader/pokedexLoader";
import PokemonPage from "../pages/PokemonPage/PokemonPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },   
    {
        path: '/pokedex',
        element: (<ProtectedRoute><Layout /></ProtectedRoute>),
        children: [
            {
                path: '',
                element: <Pokedex />,
                loader: pokedexLoader,
            },
            {
                path: ':pokemonId',
                element: <PokemonPage />,
            },
        ]
    }    
]);