import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.nav`
  background: white;
  padding-top: 10px;
  width: 100%;
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
export const SignupFacebook = styled.article`
  position: relative;
  color: ${props=>props.theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 10px;
`
export const MyTicket = styled.article`
  position: relative;
  color: ${props=>props.theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 10px;
`

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`
