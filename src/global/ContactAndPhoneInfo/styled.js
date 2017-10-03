// ejemplo de un archivo que exporta varios styled-component
import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const TelContainer = styled.article`

`

export const TelContent = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.brand};
`
export const TelNumber = Text.extend`
  font-weight: 500;
`
export const TelTitle = Text.extend`
  margin-bottom: 2.5px;
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
