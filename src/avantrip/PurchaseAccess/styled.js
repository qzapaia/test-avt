import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.div`
  width: 100%;
  height: 0;
  z-index: 1000;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &:before{
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent ${props=>props.theme.colors.gray} transparent;
    position: absolute;
    right: 0;
    z-index: 9999;
  }
`

export const MyTicketContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: white;
  box-shadow: 0 0 10px ${props=>props.theme.colors.darkergray};
  border-radius: 5px;
  margin-top: 10px;
  z-index: 999;
  ${'' /* watch here: */}
  min-width: 550px;
`

export const FormTicket = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: white;
  flex: 1 1 50%;
  padding: 15px;
  input{
    margin: 5px 0;
    &:first-of-type{
      margin-top: 10px;
    }
  }
  button{
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const WhatCanIdo = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: ${props=>props.theme.colors.gray};
  flex: 1 1 50%;
  padding: 15px;

`
export const WhatCanIdoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`
export const WhatCanIdoItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5px;
  color: black;
  flex-basis: 100%;
  svg{
    margin-right: 5px;
  }
`
