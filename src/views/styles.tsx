import styled from 'styled-components';
import { Container } from '../global.styles'

const ListContainer = styled(Container)`
  flex-flow: row wrap;
  justify-content: space-around;
  flex: 0 0 33.3333%;
`
const DetailContainer = styled(Container)`
  flex-flow: row wrap;
  justify-content: center;
`
const CharacteristicsContainer = styled(Container)`
  flex-flow: row wrap;
  justify-content: space-evenly;
  flex: 0 0 50%;
  margin-bottom: 20px;
`
const TypeContainer = styled(CharacteristicsContainer)`
  justify-content: center;
`

const LeftCol = styled.div`
  flex-flow: column wrap;
  width: 48%;
  height: 100%;
  background-color: green;
  text-align: right;
  color: white;
  padding: 20px 10px;
`
const RightCol = styled.div`
  flex-flow: column wrap;
  width: 48%;
  color: green;
  height: 100%;
  padding: 20px 10px;
`
const DetailHeader = styled.h1`
  font-family: "Flexo-Medium",arial,sans-serif;
  color: #212121;
  text-transform: capitalize;
  text-align: center;
  margin: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
`
const SubHeader = styled.h3`
  font-family: "Flexo-Medium",arial,sans-serif;
  color: #212121;
  text-transform: none;
`
const DetailImg = styled.img`
  width: 50%;
  height: 50%;
  padding-bottom: 20px;
`
const StatItem = styled.div`
  padding: 10px;
  width: 25%;
  text-align: center;
`
const LoadMoreBtn = styled.button`
`

export {
  ListContainer,
  DetailContainer,
  LeftCol,
  RightCol,
  DetailHeader,
  DetailImg,
  StatItem,
  LoadMoreBtn,
  CharacteristicsContainer,
  TypeContainer,
  SubHeader,
}