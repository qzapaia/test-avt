import styled from 'styled-components'
import Text from '../Text'

export default styled.div`
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


export const CalendarMonth = styled.button`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border: none;
  background: white;
  > *{
    margin: 2.5px 0;
  }
`

export const ContainerMonth = styled.div`
  overflow: hidden;
  .slick-track {
    display: flex;
  }
  .bestPrice {
    &${CalendarMonth}{
      color: ${props=>props.theme.colors.success};

    }
  }
  .selectedMonth {
    background-color: ${props=>props.theme.colors.primary} !important;
    color: white !important;
  }
  .slick-slider {
    position: relative;
    display: flex;
    align-items: center;
  }
  .slick-prev, .slick-next{
    position: relative;
    left: 0;
    flex: 0 1 100px;
    background: none;
    opacity: 1;
    &:after{
      width: 14px;
      height: 14px;
      border-width: 4px;
      border-bottom-color: ${props=>props.theme.colors.primary};
      border-left-color: ${props=>props.theme.colors.primary};
    }
  }
`
export const CenterText = Text.extend`
  display: flex;
  align-items: center;
`
