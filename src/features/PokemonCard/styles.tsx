import styled from 'styled-components';
import { Container } from '../../global.styles'

const Image = styled.img`
  width: 300px;
  height: 300px;
`;
const Order = styled.p`
  text-decoration: none;
  color: #919191
`;
const Name = styled.h2`
  text-decoration: none;
  text-transform: capitalize;
  color: #313131;
`
const TypePill = styled.div`
  font-family: "Flexo-Medium",arial,sans-serif;
  border-radius: 3px;
  line-height: 30px;
  max-width: 110px;
  margin: 0 1.5625% 0 0;
  width: 38.4375%;
  text-transform: none;
  font-size: 11px;
  text-align: center;
  background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background-color: #9bcc50;
`
const TypeContainer = styled(Container)`
  justify-content: flex-start;
`
const CardContainer = styled.div`
  padding: 20px;
  margin: 10px 0px;
  border-style: solid;
  border-width: thin;
  border-radius: 10px;
  border-color: #424242;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export {
  Image,
  Order,
  Name,
  TypePill,
  CardContainer,
  TypeContainer,
}