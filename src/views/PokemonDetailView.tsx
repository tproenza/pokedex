import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pokeApi } from "../services/apiService";
import { IPokemon } from "../services/apiService/apiService.types";

const PokemonDetailView = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<(IPokemon)>();

  const getPokemon = useCallback(async () => {
    const p = await pokeApi.getPokemon(name);
    if (!p) {
      navigate("/notFound");
      return;
    }
    setPokemon(p);
  }, [name, navigate]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon])
  return <><div>{pokemon?.name}</div></>;
}

export default PokemonDetailView;
