import { useState, useEffect, useCallback } from 'react';

import { PokemonCard } from '../features';
import { useNavigate } from 'react-router-dom';
import { ListContainer, LoadMoreBtn } from './styles';
import { StyledLink } from '../global.styles';
import { useGetPokemons } from '../hooks';

const PokemonListView = () => {
  const [offset, setOffset] = useState<string>('0');
  const navigate = useNavigate();
  const { pokemon, fetchData } = useGetPokemons(setOffset, () => navigate("/oops"))

  useEffect(() => {
    fetchData(offset)
  }, [])

  const handleLoadMore = () => {
    fetchData(String(pokemon?.length));
  }

  return (
    <>
      <ListContainer>
        {pokemon?.map(pkmn => {
          return (
          <StyledLink to={`/pokemon/${pkmn.name}`} key={pkmn.name}>
            <PokemonCard {...pkmn} />
          </StyledLink>)
        })}
      </ListContainer>
      <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
    </>
  );
}

export default PokemonListView;