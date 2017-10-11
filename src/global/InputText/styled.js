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
      border-radius: 0px;
      padding: 10px;
      font-weight: 300;
      border: 1px solid ${props=>props.theme.colors.darkgray};
      &:active, &:focus{
        outline: none;
      }
    }
  }
`
