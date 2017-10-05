import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.nav`
  background: white;
  padding-top: 10px;
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
