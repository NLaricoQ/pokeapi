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
      <div className="bg-neutral-100 ">
        <h1 className=" mx-10  mb-10 text-xl lg:text-4xl font-bold pt-5">
          Welcome to this adventure {userName}, you can find your favorite
          Pokemon here!
        </h1>
        <FilterForm nameInitial={pokemonName} typeInitial={pokemonType} />
        {!pokemons.length ? (
          <p className="m-10 text-center">POKEMON NOT FOUND</p>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </div>
    </>
  );
};

export default Pokedex;
