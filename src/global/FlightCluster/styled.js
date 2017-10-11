import styled from 'styled-components';

export const ClusterItem = styled.article`
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  &:not(:last-of-type){
    border-bottom: 1px dotted ${props=>props.theme.colors.darkgray};
  }
  opacity: ${props=>props.selected?'1':'0.7'};
  transition: 0.3s ease;
  &:hover{
    opacity: 1;
  }
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
  min-height: 70px;

`
export const InfoContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

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
