import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ProtectedRoute from "../layouts/ProtectedRoute";
import Layout from "../layouts/Layout";
import Pokedex from "../components/Pokedex";
import { pokedexLoader } from "./Loaders/pokedexLoader";
import PokemonDetail from "../components/PokemonDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader,
      },
      {
        path: ":pokemonId",
        element: <PokemonDetail />,
      },
    ],
  },
]);
