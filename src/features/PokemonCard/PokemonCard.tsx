import { IPokemon } from '../../services/apiService/apiService.types';
import { FIXME } from '../../shared/types';
import { Image, Order, Name, TypePill, CardContainer, TypeContainer } from './styles';

const PokemonCard = (pokemon: IPokemon) => {
const { name, order, sprite, types } = pokemon;
  return (
    <CardContainer>
      <Image src={sprite} />
      <Order>#{order}</Order>
      <Name>{name}</Name>
      <TypeContainer>
        {types.map((t: FIXME, idx: number) => {
          return <TypePill key={idx}>{t.type.name}</TypePill>
        })}
      </TypeContainer>
    </CardContainer>
  );
}

export default PokemonCard;