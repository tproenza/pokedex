import { ITransformed } from "../apiService/apiService.types";

const transformPokemon = (p: ITransformed) => {
  const t = {
    name: p.name,
    order: p.order,
    sprite: p.sprites.front_shiny,
    types: p.types,
    height: p.height,
    weight: p.weight,
    stats: p.stats,
  };
  return t;
}

export default transformPokemon;