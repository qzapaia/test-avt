import React from 'react';
import { connect} from 'react-redux';
import PriceTrendCalendar from './'
import {once} from 'lodash';
import _ from 'lodash';

import {getData} from './actions';

const mapStateToProps = state => {
  const values = [];
  _.forEach(state.histogram.payload, (value) => {
      values.push({
        price: value.total_amount_and_fee,
        name: value.departure_date
      });
  });
  return {
    data: values
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  dispatch(getData({
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
  }));
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceTrendCalendar);
