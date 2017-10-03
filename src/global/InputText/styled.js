import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  width: 100%;
  border-radius: 4px;
  .react-autosuggest__container{
    display: flex;
    width: 100%;
    input{
      width: 100%;
      border-radius: 4px;
      padding: 5px 7.5px;
      border: 1px solid ${props=>props.theme.colors.darkgray};
      &:active, &:focus{
        outline: none;
      }
    }
  }
`
