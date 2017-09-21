// ejemplo de un archivo que exporta varios styled-component
import styled from 'styled-components';

export const Container = styled.article`
  display: block;
  h1{
    margin-top: 0;
    margin-bottom: 15px;
    color: ${props => props.theme.colors.darkergray}
  }
  p{
    line-height: 22px;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.darkergray};
    strong, b{
      font-weight: bold;
    }
  }
`
