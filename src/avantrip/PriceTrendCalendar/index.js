import React from "react";
import PropTypes from "prop-types";

import Chart from "../Chart";
import Slider from "../Slider";

import moment from "moment";
import { map, groupBy, minBy, filter, isUndefined } from "lodash";

import Container from "./container.styled";
import HistogramMonth from "./HistogramMonth";

const groupByMonth = flights => groupBy(flights, "month");

const addMinPriceFlag = flights => minBy(flights, "price").price;

const calculateBestPriceInOneYear = flights => {
  if (flights.length > 0) {
    map(
      filter(flights, { bestPrice: minBy(flights, "bestPrice").bestPrice }),
      flight => (flight.isBestPriceOfYear = true)
    );
  }
  return flights;
};

const calculateBestPriceByMoths = flights =>
  map(flights, flightsByMonth => ({
    flights: flightsByMonth,
    month: moment(flightsByMonth[0].date).month(),
    year: moment(flightsByMonth[0].date).year(),
    bestPrice: addMinPriceFlag(flightsByMonth),
    isBestPriceOfYear: false
  }));

const prepateData = (flights, departureDate, returnDate) =>
  map(flights, flight => {
    flight["month"] = moment(flight.date).month();
    flight["label"] = moment(flight.date).format("DD dd");
    flight["travelDays"] = moment(returnDate).diff(
      moment(departureDate),
      "days"
    );
    return flight;
  });

const CustomTooltip = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array
  },
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="departureDate">{`Ida: ${moment(
            payload[0].payload.date
          ).format("dddd DD [de] MMMM")}`}</p>
          <p className="returnDate">{`Vuelta: ${moment(payload[0].payload.date)
            .add(payload[0].payload.travelDays, "days")
            .format("dddd DD [de] MMMM")}`}</p>
          <p className="desc">{payload[0].payload.price}</p>
        </div>
      );
    }

    return null;
  }
});

const PriceTrendCalendar = ({
  data,
  selectedMonth,
  disclaimer,
  onDaySelected,
  onMonthSelected,
  departureDate,
  returnDate
}) => {
  data = calculateBestPriceInOneYear(
    calculateBestPriceByMoths(
      groupByMonth(prepateData(data, departureDate, returnDate))
    )
  );

  selectedMonth = isUndefined(selectedMonth) ? moment().month() : selectedMonth;
  const flightBySelectedMonth = data[selectedMonth];
  return (
    <Container>
      <div>
        {flightBySelectedMonth &&
        flightBySelectedMonth.flights.length && (
          <Chart
            data={flightBySelectedMonth.flights}
            value="price"
            label="label"
            onClick={onDaySelected}
            CustomTooltip={CustomTooltip}
          />
        )}
      </div>
      <div>
        <HistogramMonth
          data={data}
          selectedMonth={selectedMonth}
          onMonthSelected={onMonthSelected}
        />
      </div>
      <div>{disclaimer && <div>{disclaimer}</div>}</div>
    </Container>
  );
};

PriceTrendCalendar.propTypes = {
  data: PropTypes.array.isRequired,
  disclaimer: PropTypes.string,
  onMonthSelected: PropTypes.func,
  onDaySelected: PropTypes.func
};

export default PriceTrendCalendar;
