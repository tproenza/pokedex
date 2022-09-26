import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pokeApi } from "../services/apiService";
import { IPokemon } from "../services/apiService/apiService.types";
import { 
  DetailContainer, 
  LeftCol, 
  RightCol,
  DetailHeader,
  DetailImg,
  StatItem,
  CharacteristicsContainer,
  TypeContainer,
  SubHeader,
 } from './styles';
 import { TypePill } from '../features/PokemonCard/styles';

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
  return (
    <>
      <DetailHeader>{pokemon?.name} #{pokemon?.order}</DetailHeader>
      <DetailContainer>
        <LeftCol>
          <DetailContainer>
            <DetailImg src={pokemon?.sprite}></DetailImg>
            <DetailContainer>
              {pokemon?.stats.map((s: any, idx: number) => {
                return <StatItem key={s.stat.name+idx}>{s.stat.name} {s.base_stat}</StatItem>
              })}
            </DetailContainer>
          </DetailContainer>
        </LeftCol>
        <RightCol>
          <CharacteristicsContainer>
            <div>Height: {pokemon?.height}</div>
            <div>Weight: {pokemon?.weight}</div>
          </CharacteristicsContainer>
          <DetailContainer>
            <SubHeader>Type</SubHeader>
          </DetailContainer>
          <TypeContainer>
              {pokemon?.types.map((t: any, idx: number) => {
                return <TypePill key={t.type.name+idx}>{t.type.name}</TypePill>
              })}
            </TypeContainer>
        </RightCol>
      </DetailContainer>
    </>
  );
}

export default PokemonDetailView;