import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
