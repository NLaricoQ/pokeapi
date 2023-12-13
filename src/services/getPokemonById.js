import axiosClient from "./axiosClient";

export const getPokemonById = async (pokemonId) => {
  try {
    const res = await axiosClient.get(`/pokemon/${pokemonId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
