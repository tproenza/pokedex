import { useState, useEffect, useCallback } from 'react';

import { IPokemon } from '../../services/apiService/apiService.types';
import { Image, Order, Name, TypePill, CardContainer, TypeContainer } from './styles';

const PokemonCard = (pokemon: IPokemon) => {
const { name, order, sprite, stats, types, weight } = pokemon;
  return (
    <CardContainer>
      <Image src={sprite} />
      <Order>#{order}</Order>
      <Name>{name}</Name>
      <TypeContainer>
        {types.map((t: any) => {
          return <TypePill key={name}>{t.type.name}</TypePill>
        })}
      </TypeContainer>
    </CardContainer>
  );
}

export default PokemonCard;