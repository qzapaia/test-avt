import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.nav`
  ${'' /* background: ${props=> props.layout <=2 ? props.theme.colors.brand :'white'}; */}
  background: white;
  padding-top: 10px;
  width: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  ${props=> props.layout <=2 ? 'height: 100%':''};
  ${'' /* position: ${props=> props.layout <=2 ? 'fixed':'static'}; */}
  ${'' /* ${props=> props.layout <=2 ? 'animation: menu 1s ease infinite':''}; */}
  @keyframes menu {
    0%{
      clip-path: circle(0% at 50% 50%);
      background: ${props=>props.theme.colors.brand};
      height: 100%;
      width: 100%;
      opacity: 0;
    }
    100%{
      clip-path: circle(100% at 50% 50%);
      background: ${props=>props.theme.colors.brand};
      height: 100%;
      width: 100%;
      opacity: 1;
    }
  }
`
export const LogoContainer = styled.figure`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
export const Slogan = Text.extend`
  margin-left: 10px;
  font-weight: 500;
`
export const MaxWidth = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props=> props.theme.viewport.desktop}
`
export const SignupFacebookContainer = styled.article`
  position: relative;
  color: ${props=>props.theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 10px;
`
export const Login = styled.button`
  background: none;
  border: none;
  position: relative;
  display: flex;
  color: ${props=>props.theme.colors.primary};
  align-items: center;
  font-weight: 300;
  cursor: pointer;
  &:focus, &:active{
    outline: none;
  }
`

export const MyPurchaseContainer = styled.article`
  position: relative;
  color: ${props=>props.theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 10px;
`
export const MyPurchaseButton = styled.button`
  background: none;
  border: none;
  position: relative;
  display: flex;
  color: ${props=>props.theme.colors.primary};
  align-items: center;
  font-weight: 300;
  cursor: pointer;
  &:focus, &:active{
    outline: none;
  }
`


export const RightNav = styled.div`
  display: flex;
  align-items: center;
`
