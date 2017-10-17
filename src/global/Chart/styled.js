import styled from 'styled-components';
import Text from '../Text';

export const ChartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`
export const PromoPrice = styled.div`
  background: ${props=>props.theme.colors.success};
  padding: 5px;
  margin-top: 10px;
  ${'' /* position: absolute; */}
  ${'' /* top: 10px; */}
  *{
    font-weight: 400;
    color: white !important;
  }
`
