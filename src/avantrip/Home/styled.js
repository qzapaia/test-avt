import styled from 'styled-components';
import Text from '../Text';
import Button from '../Button';
import FinancingPromotion from '../FinancingPromotion';

export const HomeContainer = styled.section`
  background: ${props=> props.theme.colors.lightgray};
  padding-bottom: 70px;
`
export const MainSection = styled.section`
  display: block;
  .slick-track{
    min-height: 450px;
    display: flex;
  }
`

export const FlightSearchBoxAbsolute = styled.article`
  ${({ layout }) => (layout > 1 ? 'position:absolute' : '')};
  z-index: 20;
  top: 30px;
  left: 70px;
  margin: 0 auto;
  width: 100%;
  max-width: ${props=> props.layout > 1? '450px':'97.5%'};
  max-width: ${props=> props.layout == 0? '100%':''};
  padding-top: ${props=> props.layout > 1?'':'15px'};
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const CardsContainer = styled.article`
  flex: ${props=>props.mobile ? '1 1 100%' : '1 1 60%'};
  > div{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

export const FlightsBestSellers = styled.article`
  display: block;
  ${props=>props.layout == 3
    ?'flex: 0 0 48.5%; margin: 0 10px;'
    :''}
  ${props=>props.layout <= 2
    ?'flex: 1 1 100%; margin: 0 10px;'
    :''}
  ${props=>props.layout == 0
    ?'margin: 0;'
    :''}

`
export const FlightsBestSellersTitle = Text.extend`
  background: white;
  padding: 10px;
  border-radius: 5px 5px 0 0;
`

export const ListContainer = styled.article`
  flex: 1 1 30%;
  margin-left: 5px;
  ${props=>props.layout == 3
    ?'display: flex; flex-wrap: wrap; justify-content: space-between;'
    :''}
  ${props=>props.layout <= 2
    ?'display: flex; flex-wrap: wrap; justify-content: center; margin-left: 0'
    :''}

`

export const SubscribeSection = styled.div`
  margin: 15px auto;
  button{
    margin-left: -5px;
    max-width: 150px;
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
  margin-top: 10px;
`
export const BestDealsList = styled.ul`
  background: white;
  padding: 12px 18px;
  margin-top: 10px;
  flex: 1;
  margin: 0 10px;
  max-width: 100%;
  ${BestDealsListContainer}:first-of-type &{
    ${props=>props.layout > 0?'margin-left: 0;':''};
  }
  ${BestDealsListContainer}:last-of-type &{
    ${props=>props.layout > 0?'margin-right: 0;':''};
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
