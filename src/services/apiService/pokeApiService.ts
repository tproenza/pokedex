import getApiClient from "./apiService";
import transformPokemon from "../transformService.ts/transformPokemon";
import { IApiPokemonDetail } from "./apiService.types";

const pokeClient = getApiClient(`https://pokeapi.co/api/v2`);

const getPokemonList = (offset: string = '0') => {
  try {
    return pokeClient.get(`/pokemon/?limit=12&offset=${offset}`)
      .catch(err => {
        return err.response;
      });
  } catch(error) {
    console.error('Unable to retrieve pokemon [getPokemonList]: ', error);
    return;
  }
}
const getPokemonByName = (name: string | undefined) => {
  try {
    return pokeClient.get(`/pokemon/${name}`)
      .catch(err => {
        return err.response;
      });
  } catch(error) {
    console.error('Unable to retrieve pokemon [getPokemonByName]: ', error);
    return;
  }
}

const getPokemons = async (offset: string) => {
  const res = await getPokemonList(offset);
  if (res.status >= 400) return;

  return await Promise.all(res?.data?.results?.map(async (p: IApiPokemonDetail) => {
    let res = await getPokemonByName(p.name);
    return transformPokemon(res?.data);
  }));
}

const getPokemon = async (name: string = '') => {
  const res = await getPokemonByName(name);
  if (res.status >= 400) return;
  return transformPokemon(res?.data)
}

export const pokeApi = {
  getPokemons,
  getPokemon,
};