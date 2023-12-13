import { useContext } from "react";
import { UserNameContext } from "../context/UserNameContext";

import Header from "./Header";

import PokemonList from "./PokemonList";
import { useLoaderData } from "react-router-dom";
import FilterForm from "./FilterForm";

const Pokedex = () => {
  const { userName } = useContext(UserNameContext);

  const { pokemons, pokemonName, pokemonType } = useLoaderData();

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-red-900 to-red-950">
        <h1 className="h-24">Bienvenido {userName}</h1>
        <FilterForm nameInitial={pokemonName} typeInitial={pokemonType} />
        {!pokemons.length ? (
          <p>No Pokemons</p>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </div>
    </>
  );
};

export default Pokedex;
