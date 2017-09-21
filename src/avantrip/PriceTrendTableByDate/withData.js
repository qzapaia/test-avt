import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import PriceTrendTableByDate from './'
import _ from 'lodash';


// GrahQL Query

export const FlightQuery = gql`
  query FlightQuery($origin: String!) {
      flights{
        calendar{
          roundtrip(
            origin: $origin,
            destination:"MIA",
            departureDate:"2018-01-01",
            returningDate:"2018-01-07",
            channel:"Desktop",
            portal:"avantrip",
            cabinClass:Economy,
            passengers:{
              adults:1,
              children:0,
              infants:0
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
  /*{
    vuelta:<Date>
    ida:<Date>
    price:<Number>
  }*/
  console.log('data from graphql', props.data);
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
            //selectedArrivalDate={date}
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
      passengers:{
        adults:props.value.passengers.adults,
        children:props.value.passengers.children,
        infants:props.value.passengers.infants
      }
    },
  }),
//  options: ({ value }) => ({ variables: { value } }),
})(SelectorComponent);
