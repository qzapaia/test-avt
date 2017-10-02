import styled from 'styled-components';
import Text from '../Text/index';
import Icon from '../Icon/index';

export const Container = styled.article`
  display: flex;
  background: ${props => props.theme.colors.gray};
  align-items: center;
  overflow: hidden;
  padding: 0 10px;
`
export const DateContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 30%;
`
export const DateTitle = styled.h4`
  margin-top: 4px;
  margin-bottom: 0;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  line-height: 18px;
`
export const IconContainer = styled.div`
  transform: rotate(-180deg);
  height: 14px;
`


export const DateContent = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  font-weight: lighter;

`
export const CitiesContainer = styled.article`
  display: flex;
  flex: 0 0 50%;
  max-width: 420px;
  align-items: center;
  justify-content: space-between;
  > *{
    flex: 1;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`
export const Separator = styled.div`
  flex: 1.75;
  border-bottom: 1px dotted ${props => props.theme.colors.darkgray};
`
