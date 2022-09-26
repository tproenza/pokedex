import { useState } from "react";
import { pokeApi } from "../services/apiService";
import { IPokemon } from "../services/apiService/apiService.types";


const useGetPokemon = (errCb: () => void) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<(IPokemon)>();
  const fetchData = async (name: string | undefined) => {
    setLoading(true);
    const data = await pokeApi.getPokemon(name);
    setLoading(false);
    if (!data) {
      errCb()
      return;
    }
    setPokemon(data);
  }

  return { pokemon, loading, fetchData }
}

export default useGetPokemon;