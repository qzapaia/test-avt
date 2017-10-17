import styled from 'styled-components';
import Text from '../Text';

export const ChartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props=>props.layout?'column':'row'};
  align-items: ${props=>props.layout?'center':'stretch'}
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
export const PromoPriceMax = PromoPrice.extend`
  background: ${props=>props.theme.colors.gray};
  *{
    color: ${props=>props.theme.colors.darkergray} !important;
  }
`
export const PromoPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`
