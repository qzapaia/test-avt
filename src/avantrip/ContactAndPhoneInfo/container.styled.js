// ejemplo de un archivo que exporta varios styled-component
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  h2{
    flex-basis: 100%;
    margin: 0;
  }
`

export const TelContainer = styled.article`
`
export const TelContent = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.brand};
  span{
    font-family: ${props => props.theme.fonts.book};
    font-weight: bold;
  }
  svg{
    fill: ${props => props.theme.colors.brand} !important
  }
`
export const HelpContainer = styled.div`
  margin-left: 15px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  border-left: 1px solid ${props => props.theme.colors.darkgray};
`
export const HelpLink = styled.a`
  display: flex;
  svg{
    fill: ${props => props.theme.colors.primary} !important;
    width: 25px;
  }
`
