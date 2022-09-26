import { useState } from "react";
import { pokeApi } from "../services/apiService";
import { IPokemon } from "../services/apiService/apiService.types";


const useGetPokemons = (onSuccess: (offset: string) => void, errCb: () => void) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<(IPokemon[])>([]);
  const fetchData = async (offset: string) => {
    setLoading(true);
    const data = await pokeApi.getPokemons(offset);
    setLoading(false);
    if (!data) {
      errCb()
      return;
    }
    setPokemon((prev) => [...prev, ...data]);
    onSuccess(String(pokemon.length))
  }

  return { pokemon, loading, fetchData }
}

export default useGetPokemons;