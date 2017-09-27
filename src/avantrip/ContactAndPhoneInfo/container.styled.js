// ejemplo de un archivo que exporta varios styled-component
import styled from 'styled-components';
import {Text} from '../Text/index';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const TelContainer = styled.article`
   ${Text} * {
    margin: 0;
  }
`

export const TelContent = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.brand};
  ${Text}{
    font-family: ${props => props.theme.fonts.book};
    font-weight: bold;
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

`
