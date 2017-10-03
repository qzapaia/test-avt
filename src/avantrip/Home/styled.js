import styled from 'styled-components';

export const MainSection = styled.section`
  display: block;
  .slick-track{
    min-height: 450px;
  }
`
export const FlightSearchBoxAbsolute = styled.div`
  position: absolute;
  top: 65px;
  left: 125px;
  z-index: 999;
  background: gray;
`
export const MaxWidth = styled.div`
  margin: 0 auto;
  max-width: ${props=> props.theme.viewport.desktop};
  position: relative;
`
