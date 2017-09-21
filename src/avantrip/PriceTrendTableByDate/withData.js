import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import PriceTrendTableByDate from './'
import _ from 'lodash';

export const FlightQuery = gql`
  query FlightQuery(
                    $origin: String!,
                    $destination: String!,
                    $departureDate: String!,
                    $returningDate: String!,
                    $channel: String!,
                    $portal: String!,
                    $passengersAdults:Int!,
                    $passengersChildren:Int!,
                    $passengersInfants:Int!,
                    $cabinClass:FligthCabinClassInput!) {
      flights{
        calendar{
          roundtrip(
            origin: $origin,
            destination:$destination,
            departureDate:$departureDate,
            returningDate:$returningDate,
            channel:$channel,
            portal:$portal,
            cabinClass:$cabinClass,
            passengers:{
              adults:$passengersAdults,
              children:$passengersChildren,
              infants:$passengersInfants
            }
          ){
            products{
              clusters {
                validatingCarrier
                codeshare
                international
                departureDate
                returningDate
                prices {
                  passengerPrice {
                    net
                  }
                }
              }
            }
          }
        }
      }
  }`;

const SelectorComponent = (props) => {
  const values = [];
  if(props.data.flights){
    _.forEach(props.data.flights.calendar.roundtrip.products[0].clusters,  cluster => {
      values.push({
        vuelta:cluster.returningDate,
        ida:cluster.departureDate,
        price:cluster.prices.passengerPrice[0].net
      });
    });
  }
  return <PriceTrendTableByDate {...props}
            flightDates={values}
            selectedArrivalDate={props.value.returningDate}
            selectedDepartureDate={props.value.departureDate}/>;
}

// And our HOC could look like:
export default graphql(FlightQuery, {
  options: (props) => ({
    variables: {
      origin: props.value.origin,
      destination:props.value.destination,
      departureDate:props.value.departureDate,
      returningDate:props.value.returningDate,
      channel:"Desktop",
      portal:"avantrip",
      cabinClass:props.value.cabinClass,
      passengersAdults:props.value.passengers.adults,
      passengersChildren:props.value.passengers.children,
      passengersInfants:props.value.passengers.infants
    },
  }),
//  options: ({ value }) => ({ variables: { value } }),
})(SelectorComponent);
