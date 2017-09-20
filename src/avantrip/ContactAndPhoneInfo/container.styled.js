// ejemplo de un archivo que exporta varios styled-component
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  h2{
    flex-basis: 100%;
    margin: 0;
    font-weight: lighter;
  }
`

export const TelContainer = styled.article`
`
export const TelContent = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.brand};
  span{
    font-weight: bold;
  }
  svg{
    fill: ${props => props.theme.colors.brand} !important
  }
`
export const HelpContainer = styled.div`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid ${props => props.theme.colors.darkgray};
`
export const HelpLink = styled.a`

`
