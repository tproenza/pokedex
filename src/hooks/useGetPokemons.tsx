import { useState } from "react";
import { pokeApi } from "../services/apiService";
import { IPokemon } from "../services/apiService/apiService.types";
import { getFromStorage, setToStorage } from "../services/storageService.ts"
import { FIXME } from "../shared/types";
import { STORAGE_KEYS } from "../utils/constants";


const useGetPokemons = (onSuccess: (offset: string | undefined) => void, errCb: () => void) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<(IPokemon[])>([]);
  const [combinedPokemon, setCombinedPokemon] = useState<(IPokemon[])>([]);

  const fetchData = async (offset: string | undefined) => {
    const storedPokemon = getFromStorage(STORAGE_KEYS.POKEMONS);
    const storedCustomPokemon = getFromStorage(STORAGE_KEYS.CUSTOM);
    const len = storedPokemon?.length;
    let data: FIXME = storedPokemon;

    if (!(len && offset && offset < String(len))) {
      setLoading(true);
      data = await pokeApi.getPokemons(offset);
      setLoading(false);

      if (!data) {
        errCb()
        return;
      }
    }
    
    setPokemon((prev) => {
      const newPokemons = [...prev, ...data];
      const newCombinedPokemons = [...storedCustomPokemon ?? [], ...newPokemons];
      setToStorage(STORAGE_KEYS.POKEMONS, newPokemons);
      setToStorage(STORAGE_KEYS.COMBINED, newCombinedPokemons);
      setCombinedPokemon(newCombinedPokemons);

      return newPokemons;
    });
    onSuccess(String(pokemon.length))
  }

  return { pokemon, combinedPokemon, loading, fetchData }
}

export default useGetPokemons;