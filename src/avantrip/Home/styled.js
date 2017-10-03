import styled from 'styled-components';
import Text from '../Text';
import Button from '../Button';

export const HomeContainer = styled.section`
  background: ${props=> props.theme.colors.lightgray}
`
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
export const FeaturedSection = styled.div`
  margin: 15px auto;
  max-width: ${props=> props.theme.viewport.desktop};
  position: relative;
`
export const SubscribeSection = styled.div`
  margin: 15px auto;
  button{
    margin-left: -5px;
  }
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
export const ChooseBestDeals = styled.section`
  color: ${props=> props.theme.colors.darkergray};
  margin-top: 30px;
`
export const BestDealsContainer = styled.article`
  color: ${props=> props.theme.colors.primary};
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const BestDealsListContainer = styled.div`
  flex: 0 0 33.33%;
  display: flex;
  justify-content: center;
  min-width: 250px;
`
export const BestDealsList = styled.ul`
  background: white;
  padding: 12px 18px;
  margin-top: 10px;
  flex: 1;
  margin: 0 10px;
  max-width: 100%;
  ${BestDealsListContainer}:first-of-type &{
    margin-left: 0;
  }
  ${BestDealsListContainer}:last-of-type &{
    margin-right: 0;
  }

`

export const BestDealsItem= styled.li`
  &:not(:last-of-type){
    border-bottom: 1px dotted ${props=>props.theme.colors.gray};
  }
`
export const BestDealsLink= styled.a`
  color: ${props=>props.theme.colors.primary};
  margin: 7.5px 0;
  display: inline-block;
`
