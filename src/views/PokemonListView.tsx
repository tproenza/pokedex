import { useState, useEffect, useCallback } from 'react';

import { pokeApi } from '../services/apiService';
import { IPokemon } from '../services/apiService/apiService.types';
import { PokemonCard } from '../features';
import { useNavigate } from 'react-router-dom';
import { ListContainer, LoadMoreBtn } from './styles';
import { StyledLink } from '../global.styles';

const PokemonListView = () => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<(IPokemon[])>([]);
  const [offset, setOffset] = useState<string>('0');
  const navigate = useNavigate();

  const getPokemons = useCallback(async (offset: string) => {
    setLoading(true);
    const pokemon = await pokeApi.getPokemons(offset);
    if (!pokemon) {
      navigate("/oops");
      return;
    }
    setPokemons((prev) => [...prev, ...pokemon]);
    setOffset(String(pokemons.length));
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    getPokemons(offset);
    // window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [getPokemons, offset]);

  const handleLoadMore = () => {
    getPokemons(String(pokemons?.length));
  }

  return (
    <>
      <ListContainer>
        {pokemons?.map(pokemon => {
          return (
          <StyledLink to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
            <PokemonCard {...pokemon} />
          </StyledLink>)
        })}
      </ListContainer>
      <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
    </>
  );
}

export default PokemonListView;