import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import PriceTrendTableByDate from "./";

import { forEach } from "lodash";

export const FlightQuery = gql`
  query FlightQuery(
    $origin: String!
    $destination: String!
    $departureDate: String!
    $returningDate: String!
    $channel: String!
    $portal: String!
    $passengersAdults: Int!
    $passengersChildren: Int!
    $passengersInfants: Int!
    $cabinClass: FligthCabinClassInput!
  ) {
    flights {
      calendar {
        roundtrip(
          origin: $origin
          destination: $destination
          departureDate: $departureDate
          returningDate: $returningDate
          channel: $channel
          portal: $portal
          cabinClass: $cabinClass
          passengers: {
            adults: $passengersAdults
            children: $passengersChildren
            infants: $passengersInfants
          }
        ) {
          products {
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
  }
`;

const SelectorComponent = props => {
  const values = [];
  if (props.data.flights) {
    forEach(
      props.data.flights.calendar.roundtrip.products[0].clusters,
      cluster => {
        values.push({
          returningDate: cluster.returningDate,
          departureDate: cluster.departureDate,
          price: cluster.prices.passengerPrice[0].net
        });
      }
    );
  }
  return (
    <PriceTrendTableByDate
      {...props}
      pricesByDates={values}
      selectedReturningDate={props.returningDate}
      selectedDepartureDate={props.departureDate}
    />
  );
};

// And our HOC could look like:
export default graphql(FlightQuery, {
  options: props => ({
    variables: {
      origin: props.origin,
      destination: props.destination,
      departureDate: props.departureDate,
      returningDate: props.returningDate,
      channel: "Desktop",
      portal: "avantrip",
      cabinClass: props.cabinClass,
      passengersAdults: props.passengersAdults,
      passengersChildren: props.passengersChildren,
      passengersInfants: props.passengersInfants
    }
  })
  //  options: ({ value }) => ({ variables: { value } }),
})(SelectorComponent);
