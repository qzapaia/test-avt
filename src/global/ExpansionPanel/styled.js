import styled from 'styled-components';

export const ExpandButton = styled.button`
  display: inline-flex;
  color: ${props => props.theme.colors.primary};
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  text-align: center;
  cursor: pointer;
  &:active, &:focus{
    outline: none;
    border: none;
  }
`
export const ExtendedInformation = styled.article`
  display: block;
  animation: extendedInformation 0.75s ease;
  @keyframes extendedInformation {
    0%{
      ${'' /* transform: translateX(-25px); */}
      opacity: 0;
    }

    100%{
      ${'' /* transform: translateX(0px); */}
      opacity: 1;
    }

  }
`
