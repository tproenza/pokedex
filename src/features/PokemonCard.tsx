import { useState, useEffect, useCallback } from 'react';

import { IPokemon } from '../services/apiService/apiService.types';

const PokemonCard = (pokemon: IPokemon) => {
const { name, order, sprite, stats, types, weight } = pokemon;
  return (
    <>
      <div>{name}</div>
    </>
  );
}

export default PokemonCard;