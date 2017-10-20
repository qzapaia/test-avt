import styled from 'styled-components';
import Text from '../Text';

export const ChartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props=>props.layout?'column':'row'};
  align-items: ${props=>props.layout?'center':'stretch'};
  .recharts-tooltip-cursor{
    fill: none;
  }
  .recharts-responsive-container{
    min-height: 150px;
  }
  .recharts-rectangle{
    opacity: 0.5;
    &:hover{
      opacity: 1;
    }
    &[fill="#94c627"]{
      fill: ${props=>props.theme.colors.success}
    }
    &[fill="#abd3ee"]{
      fill: ${props=>props.theme.colors.primary}
    }

  }
  ${'' /* .recharts-wrapper{
    width: 100% !important;
    svg{
      width: 100% !important;
    }
  } */}
  .recharts-tooltip-wrapper{
    background: white;
    padding: 10px;
    color: ${props=>props.theme.colors.darkergray};
    .desc{
      margin-top: 10px;
      span{
        font-size: 22px;
        font-weight: 500;
        color: ${props=>props.theme.colors.brand};
      }
    }
  }
  .recharts-reference-line{
    line{
      stroke: ${props=> props.theme.colors.success};
      stroke-dasharray: 2px;
    }
    &:last-of-type{
      line{
        stroke: ${props=> props.theme.colors.darkergray};
      }
    }
  }
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

