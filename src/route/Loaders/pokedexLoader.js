import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonByTypeId } from "../../services/getPokemonByTypeId";

export const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get("pokemonName") ?? "";
  const pokemonType = url.searchParams.get("pokemonType") ?? "";
  let pokemons;

  if (pokemonName && pokemonType) {
    pokemons = await getPokemonByTypeId(pokemonType);
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (!pokemonName && !pokemonType) {
    pokemons = await getAllPokemons();
  } else if (pokemonName) {
    pokemons = await getAllPokemons();
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (pokemonType) {
    pokemons = await getPokemonByTypeId(pokemonType);
  }

  return { pokemons, pokemonName, pokemonType };
};
