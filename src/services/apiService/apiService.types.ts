import { FIXME } from "../../shared/types";

export interface IPokemon {
  name: string;
  order: number;
  sprite: string;
  types: FIXME;
  height: number;
  weight: number;
  stats: string[];
}

export interface ITransformed {
  id: FIXME;
  name: string; 
  sprites: FIXME; 
  types: FIXME; 
  height: number; 
  weight: number; 
  stats: FIXME; 
}

export interface IApiPokemonDetail {
  name: string,
  order: number,
  sprite: {
    front_shiny: string;
  },
  types: {
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }[]
  height: number,
  weight: number,
  stats: {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string,
    }
  }[],
}