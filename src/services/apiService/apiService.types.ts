export interface IPokemon {
  name: string;
  order: number;
  sprite: string;
  types: {
    name: string;
    url: string;
  }[];
  height: number;
  weight: number;
  stats: string[];
}

export interface ITransformed {
  name: string; 
  order: number; 
  sprites: { front_shiny: string; }; 
  types: any; 
  height: number; 
  weight: number; 
  stats: any; 
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