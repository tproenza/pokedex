import { FIXME } from "../shared/types";

const CUSTOM_POKEMON: FIXME = {
  height: 7,
  order: '???',
  sprite: "https://pm1.narvii.com/6441/afb53fbe06670e12c5362291bf7e6da843c99666_00.jpg",
  stats: [
    {base_stat: 100, effort: 0, stat: {name: "hp", url: "https://pokeapi.co/api/v2/stat/1/"}}, 
    {base_stat: 110, effort: 0, stat: {name: "attack", url: "https://pokeapi.co/api/v2/stat/2/"}},
    {base_stat: 120, effort: 0, stat: {name: "defense", url: "https://pokeapi.co/api/v2/stat/3/"}},
    {base_stat: 130, effort: 1, stat: {name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/"}},
    {base_stat: 140, effort: 0, stat: {name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/"}},
    {base_stat: 150, effort: 0, stat: {name: "speed", url: "https://pokeapi.co/api/v2/stat/6/"}}
  ],
  types: [{
    type: {name: "fire", url: "https://pokeapi.co/api/v2/type/10/"}
  }],
  weight: 160
};

const STORAGE_KEYS = {
  CUSTOM: 'customPokemons',
  POKEMONS: 'pokemons',
  COMBINED: 'combinedPokemons'
}

export {
  CUSTOM_POKEMON,
  STORAGE_KEYS,
}