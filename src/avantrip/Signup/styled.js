import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.div`
  position: absolute;
  left: 40px;
  top: 20px;
  ${'' /* transform: translateY(-15px); */}
  height: 0;
  z-index: 1000;
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
    position: relative;
    z-index: 9999;
  }
`
export const SignUpContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0 0 10px ${props=>props.theme.colors.darkergray};
  border-radius: 5px;
  margin-top: 10px;
  z-index: 999;
  min-width: 220px;
`

export const ExclusiveOffers = styled.h2`
  background: ${props=> props.theme.colors.gray};
  color: black;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
`
export const Disclaimer = Text.extend`
  margin-top: 20px;
  width: 90%;
  padding-top: 10px;
  border-top: 1px solid ${props=>props.theme.colors.gray};
  margin-bottom: 20px;
`
