import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.div`
  display: block;
  background: white;
  padding: 10px;
  input{
    ${'' /* don't get mad */}
    padding: 10px 5px;
  }
  .react-autosuggest__suggestions-container{
    position: absolute;
    background: white;
    z-index: 9;
    margin-top: 25px;
    width: 100%;
    left: 0;
  }
  .react-autosuggest__suggestions-list{
    border: 1px solid ${props=>props.theme.colors.darkgray};
    position: relative;
    margin-top: 10px;
    &:before{
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent white transparent;
      position: absolute;
      top: -10px;
      z-index: 9999;
    }
    &:after{
      border-color: transparent;
      width: 15px;
      height: 15px;
      position: absolute;
      content: "";
      transform: rotate(135deg);
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      top: -8px;
      left: 2px;
    }
  }
  .react-autosuggest__suggestion{
    padding: 5px;
    transition: 0.3s ease;
    &:hover{
      background: ${props=>props.theme.colors.primary};
      button{
        color: white;
      }
    }
    button{
      border: none;
      background: none;
      transition: 0.3s ease;
    }
  }
`
export const MainTitle = Text.extend`
  margin: 10px 0;
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  svg{
    margin-right: 5px;
  }
`
export const TopSearch = styled.div`
  display: flex;
  align-items: center;
`
export const Radios = styled.div`
  flex: 2;
  > div > div{
    display: flex;
    justify-content: space-around;
  }
`
export const FromTo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  label{
    flex: 0 1 48%;
  }
`
