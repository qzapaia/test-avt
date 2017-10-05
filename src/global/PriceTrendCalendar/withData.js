import React from "react";
import { gql, graphql } from "react-apollo";
import { connect } from "react-redux";

import PriceTrendCalendar from "./";

import { map } from "lodash";

import { setSelectedMonth, setSelectedDay } from "./actions";

const mapStateToProps = state => ({
  selectedMonth: state.histogram.selectedMonth
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMonthSelected: selectedMonth => {
      dispatch(setSelectedMonth(selectedMonth));
    },
    onDaySelected: selectedDay => {
      dispatch(setSelectedDay(selectedDay));
    },
    departureDate: ownProps.dateFrom,
    returnDate: ownProps.dateTo
  };
};

export const HistogramQuery = gql`
  query HistogramQuery(
    $origin: String!
    $destination: String!
    $dateTo: String!
    $dateFrom: String!
    $minDepartureMonthYear: String!
    $maxDepartureMonthYear: String!
    $minDepartureDate: String!
    $maxDepartureDate: String!
    $channel: String!
    $portal: String!
    $adults: Int!
    $children: Int!
    $babies: Int!
  ) {
    histogram(
      channel: $channel
      portal: $portal
      origin: $origin
      destination: $destination
      dateTo: $dateTo
      dateFrom: $dateFrom
      dateLayer: true
      adults: $adults
      children: $children
      babies: $babies
      duration: 30
      minDepartureMonthYear: $minDepartureMonthYear
      maxDepartureMonthYear: $maxDepartureMonthYear
      minDepartureDate: $minDepartureDate
      maxDepartureDate: $maxDepartureDate
    ) {
      total_amount_and_fee
      departure_date
    }
  }`;

const SelectorComponent = props => (
    <PriceTrendCalendar
      {...props}
      data={map(props.data.histogram, value => ({
        price: value.total_amount_and_fee,
        date: value.departure_date
      }))}
      returnDate={props.returningDate}
      departureDate={props.departureDate}
    />
  );

  // And our HOC could look like:
  const graphqlComponent =  graphql(HistogramQuery, {
    options: props => ({
      variables: {
        origin: props.origin,
        destination: props.destination,
        dateTo: props.dateTo,
        dateFrom: props.dateFrom,
        channel: props.channel || "Desktop",
        portal: props.portal || "avantrip",
        adults: props.adults,
        children: props.children,
        babies: props.babies,
        minDepartureMonthYear: props.minDepartureMonthYear,
        maxDepartureMonthYear: props.maxDepartureMonthYear,
        minDepartureDate: props.minDepartureDate,
        maxDepartureDate: props.maxDepartureDate,
      }
    })
    //  options: ({ value }) => ({ variables: { value } }),
  })(SelectorComponent);

export default connect(mapStateToProps, mapDispatchToProps)(graphqlComponent);
