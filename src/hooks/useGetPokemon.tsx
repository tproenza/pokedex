import { useState } from "react";
import { pokeApi } from "../services/apiService";
import { IPokemon } from "../services/apiService/apiService.types";
import { getFromStorage } from "../services/storageService.ts";
import { FIXME } from "../shared/types";
import { STORAGE_KEYS } from "../utils/constants";


const useGetPokemon = (name: string | undefined, errCb: () => void) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<(IPokemon)>();
  const fetchData = async (name: string | undefined) => {
    const storedCombinedPokemon = getFromStorage(STORAGE_KEYS.COMBINED);
    let data: FIXME = storedCombinedPokemon.find((p:FIXME) => p?.name?.toLowerCase() === name?.toLowerCase());

    if (!data){
      setLoading(true);
      data = await pokeApi.getPokemon(name);
      setLoading(false);
      if (!data) {
        errCb()
        return;
      }
    }
    
    setPokemon(data);
  }

  return { pokemon, loading, fetchData }
}

export default useGetPokemon;