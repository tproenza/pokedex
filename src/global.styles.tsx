import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
`
const AppContainer = styled.div`
  background: white;
  margin: 0px 15%;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`

export {
  Container,
  AppContainer,
  StyledLink
}