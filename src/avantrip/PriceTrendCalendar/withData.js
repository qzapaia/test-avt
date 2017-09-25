import React from "react";
import { connect } from "react-redux";
import PriceTrendCalendar from "./";
import { once } from "lodash";
import { map } from "lodash";
import moment from "moment";

import { getData, setSelectedMonth } from "./actions";

const mapStateToProps = state => ({
  data: map(state.histogram.payload, value => ({
    price: value.total_amount_and_fee,
    date: value.departure_date
  }))
});

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(
    getData({
      origin: ownProps.origin,
      destination: ownProps.destination,
      dateTo: ownProps.dateTo,
      dateFrom: ownProps.dateFrom,
      dataLayer: true,
      adults: ownProps.adults,
      children: ownProps.children,
      babies: ownProps.babies,
      duration: "30",
      minDepartureMonthYear: ownProps.minDepartureMonthYear,
      maxDepartureMonthYear: ownProps.maxDepartureMonthYear,
      minDepartureDate: ownProps.minDepartureDate,
      maxDepartureDate: ownProps.maxDepartureDate
    })
  );

console.log("ownProps", ownProps);

  return {
    onChange: selectedMonth => {
      dispatch(setSelectedMonth(selectedMonth));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceTrendCalendar);
