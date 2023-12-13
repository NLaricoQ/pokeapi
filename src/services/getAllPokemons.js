import axiosClient from "./axiosClient";

export const getAllPokemons = async () => {
  try {
    const res = await axiosClient.get("/pokemon", {
      params: { limit: 10000 },
    });

    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
