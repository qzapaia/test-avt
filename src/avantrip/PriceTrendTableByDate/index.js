import React from "react";
import PropTypes from "prop-types";

import moment from "moment";
import { map, groupBy, minBy, reduce } from "lodash";

import PriceData from "./PriceData";

const addFirstColumnHeader = (returnDateTitle, flights) =>
  map(flights, (fRow, key) => {
    //Unshift no devuelve el mismo array
    fRow.unshift({
      title: returnDateTitle,
      day: moment(key).format("dddd"),
      date: moment(key).format("DD/MM/YYYY"),
      rawDate: key
    });
    return fRow;
  });

const addFirstRowHeader = (
  departureDateTitle,
  flightGroupedByDepartureDate,
  flightsWithColumnHeader
) => {
  const firstColumnFlightMatrix = map(
    flightGroupedByDepartureDate,
    (fCol, key) => ({
      title: departureDateTitle,
      day: moment(key).format("dddd"),
      date: moment(key).format("DD/MM/YYYY"),
      rawDate: key
    })
  );

  firstColumnFlightMatrix.unshift({}); //Primer item de la matriz vacío

  flightsWithColumnHeader.unshift(firstColumnFlightMatrix);

  return flightsWithColumnHeader;
};

const groupFlightsByField = (flights, fieldName) => {
  return groupBy(flights, fieldName);
};

const addMinPriceFlag = flights => {
  const flightWithMinPrice = minBy(flights, "price");
  return reduce(
    flights,
    (acc, f) => {
      if (!acc) {
        acc = [];
      }
      //Pregunto de nuevo si hay algún otro vuelo con el precio mínimo
      if (f.price == flightWithMinPrice.price) {
        acc.push(f);
      }
      return acc;
    },
    []
  );
};

const PriceTrendTableByDate = ({
  pricesByDates,
  selectedReturningDate,
  selectedDepartureDate,
  onClick,
  departureDateTitle,
  returnDateTitle
}) => {
  const flightDatesWithMinPrices = addMinPriceFlag(pricesByDates);

  const flightDatesMatrix = addFirstRowHeader(
    departureDateTitle,
    groupFlightsByField(pricesByDates, "departureDate"),
    addFirstColumnHeader(
      returnDateTitle,
      groupFlightsByField(pricesByDates, "returningDate")
    )
  );

  return (
    <div>
      {map(flightDatesMatrix, fRow => (
        <PriceData
          fRow={fRow}
          selectedReturningDate={selectedReturningDate}
          selectedDepartureDate={selectedDepartureDate}
          flightDatesWithMinPrices={flightDatesWithMinPrices}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

PriceTrendTableByDate.propTypes = {
  pricesByDates: PropTypes.array,
  selectedReturningDate: PropTypes.string,
  selectedDepartureDate: PropTypes.string,
  onClick: PropTypes.func,
  departureDateTitle: PropTypes.node,
  returnDateTitle: PropTypes.node
};

PriceTrendTableByDate.defaultProps = {
  departureDateTitle: "IDA",
  returnDateTitle: "VUELTA"
};

export default PriceTrendTableByDate;
