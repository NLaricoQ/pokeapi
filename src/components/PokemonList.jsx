import { useContext } from "react";

import PokemonCard from "./PokemonCard";

import { Link } from "react-router-dom";
import { UserNameContext } from "../context/UserNameContext";

const PokemonList = ({ pokemons }) => {
  const { currentPage, setCurrentPage } = useContext(UserNameContext);

  const filteredPokemons = () => {
    return pokemons.slice(currentPage, currentPage + 15);
  };

  const nextPage = () => {
    if (pokemons.length > currentPage + 15) setCurrentPage(currentPage + 15);
  };

  const previousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 15);
  };
  const current = currentPage / 15 + 1;
  const total = Math.ceil(pokemons.length / 15);

  return (
    <section>
      <div className="my-5 flex flex-row justify-center gap-5">
        <button
          className="border-2 p-2 bg-black text-white uppercase font-bold"
          onClick={previousPage}
        >
          Back
        </button>
        <h1 className="border-2 p-2 bg-black text-white font-bold">
          Page: {current} of {total}
        </h1>
        <button
          className="border-2 p-2 bg-black text-white uppercase font-bold"
          onClick={nextPage}
        >
          Next
        </button>
      </div>

      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredPokemons().map((pokemon) => (
          <li key={pokemon.url}>
            <Link to={`${pokemon.url.split("/").at(-2)}`}>
              <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="pb-5  flex flex-row justify-center gap-5">
        <button
          className="border-2 p-2 bg-black text-white uppercase font-bold"
          onClick={previousPage}
        >
          Back
        </button>
        <h1 className="border-2 p-2 bg-black text-white  font-bold">
          Page: {current} of {total}
        </h1>
        <button
          className="border-2 p-2 bg-black text-white uppercase font-bold"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default PokemonList;
