import React from "react";
import PropTypes from "prop-types";

import Chart from "../Chart/withData";
import Text from "../Text";

import Container from "./styled";
import HistogramMonth from "./HistogramMonth";
import CustomTooltip from "./CustomTooltip";

import moment from "moment";
import { map, groupBy, minBy, filter, isUndefined, find } from "lodash";

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
  returnDate,
  media
}) => {
  const processedData = calculateBestPriceInOneYear(
    formatMonthlyFlights(
      groupByMonth(formatFlightData(data, departureDate, returnDate))
    )
  );
  const monthToShow = isUndefined(selectedMonth) ? moment().month() : selectedMonth;
  const dataByMonth = find(processedData, { 'month': monthToShow });
  const bestPrice = getBestPriceBy(dataByMonth);

  return <Container>
    {dataByMonth && (
      <Chart
        data={dataByMonth.flights}
        value="price"
        label="label"
        onClick={onDaySelected}
        CustomTooltip={CustomTooltip}
        renderBar={args => {
          if (args.price == bestPrice) {
            args.fill = "#94c627";
          }
          return args;
        }}
      />
    )}
    <HistogramMonth
      data={processedData}
      selectedMonth={monthToShow}
      onMonthSelected={onMonthSelected}
      layout={media.size}
    />
    <div><Text>{disclaimer}</Text></div>
  </Container>
};

PriceTrendCalendar.propTypes = {
  data: PropTypes.array.isRequired,
  disclaimer: PropTypes.string,
  onMonthSelected: PropTypes.func,
  onDaySelected: PropTypes.func,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string
};

export default PriceTrendCalendar;
