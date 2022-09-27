import { useState } from "react";
import { getFromStorage, setToStorage } from "../services/storageService.ts";
import { useNavigate } from 'react-router-dom';
import { getCustomPokemon } from "../utils/utils";
import { FIXME } from "../shared/types";
import { STORAGE_KEYS } from "../utils/constants";

const CreatePokemonView = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FIXME) => {
    e.preventDefault();

    const storedCustomPokemon = getFromStorage(STORAGE_KEYS.CUSTOM);
    if (!storedCustomPokemon?.length) {
      setToStorage(STORAGE_KEYS.CUSTOM, [getCustomPokemon(value)]);
    } else {
      const allCustomPokemon = [getCustomPokemon(value), ...storedCustomPokemon];
      setToStorage(STORAGE_KEYS.CUSTOM, allCustomPokemon);
    }
    navigate('/')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder="Enter your Pokemon's name!"
          name='pokemonName'
          value={value} 
          onChange={(e) => setValue(e.target.value)} />
        <input type="submit" />
      </form>
    </>
  );
}

export default CreatePokemonView;