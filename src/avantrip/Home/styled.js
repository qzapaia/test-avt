import styled from 'styled-components';
import Text from '../Text';

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
export const AgencyInfo = styled.article`
  margin: 15px auto;
  max-width: ${props=> props.theme.viewport.desktop};
  position: relative;
`
export const AgencyTitle = Text.extend`
  margin: 10px 0;
  font-weight: 300;
  color: ${props=> props.theme.colors.darkergray};
  
`
export const AgencyText = Text.extend`
  color: ${props=> props.theme.colors.darkergray};
  line-height: 20px;
  strong{
    font-weight: 400;
  }
`
