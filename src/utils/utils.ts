import { CUSTOM_POKEMON } from "./constants";

const getParamsFromUrl = (url: string | null) => {
  const urlSearchParams = new URLSearchParams(url?.split('?')[1]);
  return Object.fromEntries(urlSearchParams.entries());
}
const getCustomPokemon = (name: string) => {
  CUSTOM_POKEMON['name'] = name;
  return CUSTOM_POKEMON
}

export {
  getParamsFromUrl,
  getCustomPokemon,
}