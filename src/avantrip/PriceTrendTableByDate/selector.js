import { map, groupBy } from "lodash";
import moment from "moment";

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

export default (
  pricesByDates,
  departureDateTitle,
  returnDateTitle
) => {
  return addFirstRowHeader(
    departureDateTitle,
    groupFlightsByField(pricesByDates, "departureDate"),
    addFirstColumnHeader(
      returnDateTitle,
      groupFlightsByField(pricesByDates, "returningDate")
    )
  );
}
