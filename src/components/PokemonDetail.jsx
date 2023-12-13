import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/getPokemonById";
import { useEffect, useState } from "react";
import Header from "./Header";

const PokemonDetail = () => {
  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
      console.log(pokemonData);
    };
    getPokemon();
  }, [pokemonId]);
  return (
    <div>
      <Header />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonDetail;
