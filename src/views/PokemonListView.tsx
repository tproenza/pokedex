import { useState, useEffect, useCallback } from 'react';

import { pokeApi } from '../services/apiService';
import { IPokemon } from '../services/apiService/apiService.types';
import PokemonCard from '../features/PokemonCard';
import { Link, useNavigate } from 'react-router-dom';

const PokemonListView = () => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<(IPokemon[])>([]);
  const [offset, setOffset] = useState<string>('0');
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const navigate = useNavigate();

  const getPokemons = useCallback(async (offset: string) => {
    setLoading(true);
    const pokemon = await pokeApi.getPokemons(offset);
    if (!pokemon) {
      navigate("/oops");
      return;
    }
    setOffset(String(pokemon.length));
    setPokemons((prev) => [...prev, ...pokemon]);
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    console.log('useEffect');
    getPokemons(offset);
    // window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [getPokemons, offset]);

  const handleLoadMore = () => {
    getPokemons(String(pokemons?.length));
  }

  return (
    <>
      {pokemons?.map(pokemon => {
        return (<Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
          <PokemonCard {...pokemon} />
        </Link>)
      })}
      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
}

export default PokemonListView;