import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.article`
  display: block;
  background: white;
  padding: 5px 10px;
  transition: 0.3s ease;
  &:hover{
    box-shadow: 0px 5px 10px ${props=>props.theme.colors.gray};
  }
`

export const ClusterItem = styled.article`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:not(:last-of-type){
    border-bottom: 1px dashed ${props=>props.theme.colors.darkgray};
  }
  transition: 0.3s ease;

`
export const ClusterContent = styled.article`
  flex: 1;
`
export const AirlineName = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;

`
export const InfoContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 70px;


`
export const AirlineContainer = styled.div`
  flex: 0 0 31%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 10px;
`
export const FromTo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  max-width: 290px;
  margin-left: 5.5%;
`
export const Detail = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Origin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
`
export const Arrival = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`
export const Scale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  &:before{
    content: "";
    flex: 1;
    margin: 0 10px;
    border-bottom: 1px dashed ${props=>props.theme.colors.darkgray};
  }
  &:after{
    content: "";
    flex: 1;
    margin: 0 10px;
    border-bottom: 1px dashed ${props=>props.theme.colors.darkgray};
  }

`
export const Iata = styled.span`
  font-weight: 500;
  border-bottom: 1px solid black;
  margin-bottom: 2.5px;
`
export const Date = styled.span`
  font-weight: 400;
`
export const TripTitle = styled.header`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props=>props.theme.colors.gray};
`

export const IataBold = Text.extend`
  font-weight: 500;
`
export const MediumBold = Text.extend`
  font-weight: 400;
`

export const DetailDeparture = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`
export const DetailArrival = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start
`
export const DetailFlight = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  margin: 10px 10px;
  > *{
    padding: 5px 0;
    width: 100%;
    text-align: center;
    &:not(:last-child){
      border-bottom: 1px dashed ${props=>props.theme.colors.darkgray};
    }
  }
`
export const MainDetail = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const DelayContainer = styled.article`
  flex: 1 1 100%;
`
export const Delay = Text.extend`
  border-top: 1px dashed ${props=>props.theme.colors.darkgray};
  border-bottom: 1px dashed ${props=>props.theme.colors.darkgray};
  padding: 10px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Step = styled.h2`
  padding: 7px;
  background: ${props=>props.theme.colors.gray};
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`
export const AirlineDetail = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BoldText = Text.extend`
  font-weight: 400;
  margin-left: 5px;
`
export const FlightNumber = Text.extend`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  svg{
    margin-right: 5px;
  }
`
export const Disclaimer = Text.extend`
  text-align: center;
  font-style: italic;
  margin: 5px;
`
export const FareDetailContainer = styled.article`
  flex: 1 1 25%;
  padding-left: 20px;
`
export const AdditionalInfo = Text.extend`
  padding: 5px 0px;
  display: flex;
  align-items: center;
`
export const ClassDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FlightContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 75%;
`
export const DisclaimerPrice = styled.article`
  flex: 1 1 100%;
  align-self: flex-end;
`
export const TitleMargin = Text.extend`
  margin: 10px 0;
`

export const ClusterContainer = styled.article`
  display: flex;
  flex-wrap: wrap;

  .__react_component_tooltip{
    max-width: 320px;
    background: ${props=>props.theme.colors.primary};
  }
  .__react_component_tooltip.type-dark.place-top:after {
    border-top-color: ${props=>props.theme.colors.primary}
`
export const FlightClusterRouteContainer = styled.article`
  flex: 1 1 100%;
  display: flex;
  background: ${props => props.theme.colors.gray};
  align-items: center;
  overflow: hidden;
  padding: 0 10px;
`

export const FlightInfo = styled.div`
  flex: 1 1 100%;
`
//////////////////////////

export const DateContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 35%;
`
export const DateTitle = styled.h4`
  margin-top: 4px;
  margin-bottom: 0;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  line-height: 18px;
`
export const IconContainer = styled.div`
  transform: rotate(-180deg);
  height: 14px;
`


export const DateContent = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  font-weight: lighter;

`
export const CitiesContainer = styled.article`
  display: flex;
  flex: 1 0 50%;
  max-width: 300px;
  margin-left: 40px;
  align-items: center;
  justify-content: space-between;

`
export const City = Text.extend`
  flex: 1;
  display: flex;
  &:first-of-type{
    justify-content: flex-end;
    padding-right: 5px;
  }
  &:last-of-type{
    justify-content: flex-start;
    padding-left: 5px;
  }

`

export const Separator = styled.div`
  flex: 1.75;
  border-bottom: 1px dashed ${props => props.theme.colors.darkgray};
`
