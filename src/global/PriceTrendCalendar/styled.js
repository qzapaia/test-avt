import styled from 'styled-components'

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
      stroke: black;
      stroke-dasharray: 2px;
    }
  }
`
