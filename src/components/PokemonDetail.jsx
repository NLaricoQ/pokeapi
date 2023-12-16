import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/getPokemonById";
import { useEffect, useState } from "react";
import Header from "./Header";
import { getSpeciesById } from "../services/getSpecies";
import { getEvolutionChainById } from "../services/getPokemonEvolutionChain";

const PokemonDetail = () => {
  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [specie, setSpecie] = useState({});
  const [evolutionChain, setEvolutionChain] = useState({});
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemonById(pokemonId);
        setPokemon(pokemonData);

        const specieData = await getSpeciesById(pokemonId);
        setSpecie(specieData);

        if (specieData?.evolution_chain?.url) {
          const chainId = specieData.evolution_chain.url.split("/").at(-2);
          const res = await getEvolutionChainById(chainId);
          setEvolutionChain(res);
          const evol1 = res.chain.species;
          setFirst(evol1);
          if (res.chain.evolves_to?.length) {
            const evol2 = [];
            res.chain.evolves_to.map((e) => evol2.push(e));
            setSecond(evol2);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pokemonId]);

  return (
    <div className="flex flex-col bg-neutral-100">
      <Header />

      <h1 className="uppercase font-bold text-5xl text-center my-10">
        {pokemon.name}
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img
            className="lg:w-1/2 "
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
          />
          <div className="flex flex-row mx-10 justify-center gap-10">
            <div className="flex flex-col ">
              <h3 className="uppercase font-bold text-2xl text-center">
                height
              </h3>
              <p className="text-center">{pokemon.height / 10}m</p>
            </div>
            <div className="flex flex-col">
              <h3 className="uppercase font-bold text-2xl text-center">
                weight
              </h3>
              <p className="text-center">{pokemon.weight / 10}Kg</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row  mx-5 my-10 gap-5 ">
          <div>
            <h2 className="uppercase font-bold text-2xl text-center">Type</h2>
            <ul>
              {pokemon?.types?.map((e) => (
                <li key={e.type.url}>
                  <p className="text-center">{e.type.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="uppercase font-bold text-2xl text-center">
              Abilities
            </h2>
            <ul>
              {pokemon?.abilities?.map((e) => (
                <li key={e.ability.url}>
                  <p className="text-center">{e.ability.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="uppercase font-bold text-2xl text-center">Moves</h2>
            <ul className="overflow-y-auto h-20">
              {pokemon?.moves?.map((e) => (
                <li key={e.move.url}>
                  <p className="text-center">{e.move.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {pokemon.sprites?.other?.["official-artwork"]?.front_shiny && (
          <div className="flex flex-col items-center">
            <h2 className="uppercase font-bold text-2xl text-center">
              shiny sprite
            </h2>
            <img
              className="lg:w-1/2"
              src={pokemon.sprites.other["official-artwork"].front_shiny}
            />
          </div>
        )}

        <div className="flex flex-col">
          {evolutionChain && (
            <h1 className="uppercase font-bold text-2xl text-center">
              Evoluion chain: {evolutionChain.id}
            </h1>
          )}

          {first && (
            <div className="flex flex-col h-full items-center">
              <Link to={`/pokedex/${first}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${first?.url
                    ?.split("/")
                    .at(-2)}.png`}
                />
                <p className="uppercase font-bold text-2xl text-center">
                  {first?.name}
                </p>
              </Link>
            </div>
          )}
          {second && (
            <div>
              {second.map((e, i) => (
                <div key={i} className="flex items-center flex-col ">
                  <Link to={`/pokedex/${e.species?.url?.split("/").at(-2)}`}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.species?.url
                        ?.split("/")
                        .at(-2)}.png`}
                    />
                    <p className="uppercase font-bold text-2xl text-center">
                      {e.species?.name}
                    </p>
                  </Link>

                  <ul className="flex items-center">
                    {e?.evolves_to?.length > 0 && (
                      <ul className="flex flex-row">
                        {e.evolves_to.map((e, i) => (
                          <li key={i}>
                            <Link
                              to={`/pokedex/${e.species?.url
                                ?.split("/")
                                .at(-2)}`}
                            >
                              <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.species?.url
                                  ?.split("/")
                                  .at(-2)}.png`}
                              />
                              <p className="uppercase font-bold text-2xl text-center">
                                {e.species?.name}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
