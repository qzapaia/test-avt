import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
`
export const DetailInfo = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px 0;
  > *{
    flex: 1;
    &:last-child{
      text-align: right;
    }
  }
`
export const FinalPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0;
  align-self: center;
`

export const FarePerPerson = Text.extend`
  margin: 5px 0;
`

export const ViewDetails = styled.button`
  &:focus, &:active{
    outline: none;
  }
  color: ${props=>props.theme.colors.primary};
  text-transform: uppercase;
  align-self: center;
  background: none;
  border: none;
`

export const ExpandContainer = Container.extend`
  animation: 0.5s expand ease;
  width: 100%;
  @keyframes expand {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }

  }
`
