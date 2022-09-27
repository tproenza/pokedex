import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
 import { useGetPokemon } from "../hooks";
import { FIXME } from "../shared/types";

const PokemonDetailView = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { pokemon, fetchData } = useGetPokemon(name, () => navigate("/notFound"))

  useEffect(() => {
    fetchData(name);
  }, [])
  return (
    <>
      <DetailHeader>{pokemon?.name} #{pokemon?.order}</DetailHeader>
      <DetailContainer>
        <LeftCol>
          <DetailContainer>
            <DetailImg src={pokemon?.sprite}></DetailImg>
            <DetailContainer>
              {pokemon?.stats.map((s: FIXME, idx: number) => {
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
              {pokemon?.types.map((t: FIXME, idx: number) => {
                return <TypePill key={t.type.name+idx}>{t.type.name}</TypePill>
              })}
            </TypeContainer>
        </RightCol>
      </DetailContainer>
    </>
  );
}

export default PokemonDetailView;