import React from "react";
import PropTypes from "prop-types";

import Chart from "../Chart";

import Container from "./container.styled";
import HistogramMonth from "./HistogramMonth";
import CustomTooltip from "./CustomTooltip";

import moment from "moment";
import { map, groupBy, minBy, filter, isUndefined } from "lodash";

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

const formatMonthlyFlights = monthlyFlights =>
  map(monthlyFlights, dataByMonth => ({
    flights: dataByMonth,
    month: moment(dataByMonth[0].date).month(),
    year: moment(dataByMonth[0].date).year(),
    bestPrice: addMinPriceFlag(dataByMonth),
    isBestPriceOfYear: false
  }));

const formatFlightData = (flights, departureDate, returnDate) =>
  map(flights, flight => {
    flight["month"] = moment(flight.date).month();
    flight["label"] = moment(flight.date).format("DD dd");
    flight["travelDays"] = moment(returnDate).diff(
      moment(departureDate),
      "days"
    );
    return flight;
  });

const getBestPriceBy = dataByMonth =>
  dataByMonth &&
  dataByMonth.isBestPriceOfYear &&
  dataByMonth.bestPrice;

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
    formatMonthlyFlights(
      groupByMonth(formatFlightData(data, departureDate, returnDate))
    )
  );

  selectedMonth = isUndefined(selectedMonth) ? moment().month() : selectedMonth;
  const dataByMonth = data[selectedMonth];
  const bestPrice = getBestPriceBy(dataByMonth);

  return (
    <Container>
      {dataByMonth && (
        <Chart
          data={dataByMonth.flights}
          value="price"
          label="label"
          onClick={onDaySelected}
          CustomTooltip={CustomTooltip}
          renderBar={args => {
            if (args.price == bestPrice) {
              args.fill = "green";
            }
            return args;
          }}
        />
      )}
      <HistogramMonth
        data={data}
        selectedMonth={selectedMonth}
        onMonthSelected={onMonthSelected}
      />
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
