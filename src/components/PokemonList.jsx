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
      <button onClick={previousPage}>Back</button>
      <h1>
        Page: {current} of {total}
      </h1>
      <button onClick={nextPage}>Next</button>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredPokemons().map((pokemon) => (
          <li key={pokemon.url}>
            <Link to={`${pokemon.url.split("/").at(-2)}`}>
              <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PokemonList;
