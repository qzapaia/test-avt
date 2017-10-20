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
    border-bottom: 1px dotted ${props=>props.theme.colors.darkgray};
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
  margin-left: 40px;
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
    border-bottom: 1px dotted ${props=>props.theme.colors.darkgray};
  }
  &:after{
    content: "";
    flex: 1;
    margin: 0 10px;
    border-bottom: 1px dotted ${props=>props.theme.colors.darkgray};
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
      border-bottom: 1px dotted ${props=>props.theme.colors.darkgray};
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
  border-top: 1px dotted ${props=>props.theme.colors.darkgray};
  border-bottom: 1px dotted ${props=>props.theme.colors.darkgray};
  padding: 10px;
  text-align: center;
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
  flex: 1;
  min-width: 220px;
  padding: 0 20px;
`
export const AdditionalInfo = Text.extend`
  padding: 5px 0px;
  display: flex;
  align-items: center;
`
