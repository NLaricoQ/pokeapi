import { useEffect, useState } from "react";
import { getPokemonById } from "../services/getPokemonById";
import Loader from "./Loader";

const PokemonCard = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const targetStats = ["hp", "defense", "attack", "speed"];
  const stats = pokemonData?.stats.filter((stat) =>
    targetStats.includes(stat.stat.name)
  );
  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemonData(pokemonData);
    };

    loadPokemon();
  }, []);

  const name = pokemonData ? pokemonData.name.toUpperCase() : "";
  return (
    <>
      <article>
        {!pokemonData && <Loader />}
        {pokemonData && (
          <div className="flex flex-col content-center items-center m-5 rounded-3xl bg-red-300 ">
            <div className="flex flex-col content-center items-center">
              <img
                className="w-3/4"
                src={
                  pokemonData.sprites.other["official-artwork"].front_default
                    ? pokemonData.sprites.other["official-artwork"]
                        .front_default
                    : "https://i.pinimg.com/originals/46/e7/7e/46e77e3db6a6cdce8c63a9de331f31ff.png"
                }
              />
              <h1 className="font-bold text-3xl mb-3">{name}</h1>

              <ul className="flex flex-row gap-3">
                <span className="font-bold">Type:</span>
                {pokemonData.types.map((pokemon) => (
                  <li key={pokemon.type.name}>{pokemon.type.name}</li>
                ))}
              </ul>
              <ul className="grid grid-cols-2 gap-7 m-5">
                {stats.map((stat) => (
                  <li key={stat.stat.name}>
                    <span>
                      <span className="font-bold">
                        {stat.stat.name.toUpperCase()}
                      </span>{" "}
                      : {stat.base_stat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default PokemonCard;
