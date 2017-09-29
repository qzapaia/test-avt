import { map, groupBy, forEach, minBy } from "lodash";
import moment from "moment";

const addFirstColumnHeader = (returnDateTitle, flights) =>
  map(flights, (fRow, key) => {
    //Unshift no devuelve el mismo array
    fRow.unshift({
      title: returnDateTitle,
      day: moment(key).format("dddd"),
      date: moment(key).format("DD/MM/YYYY"),
      rawDate: key,
      isTitle: true
    });
    return fRow;
  });

const isSelectedFlight = (currentFlight, selectedDate) => {
  if (!selectedDate.returningDate) {
    return false;
  }

  if (currentFlight.isTitle) {
    const currentFlightDate = moment(currentFlight.rawDate).format(
      "YYYY/MM/DD"
    );
    return (
      currentFlightDate ==
        moment(selectedDate.returningDate).format("YYYY/MM/DD") ||
      currentFlightDate ==
        moment(selectedDate.departureDate).format("YYYY/MM/DD")
    );
  } else {
    return (
      currentFlight.returningDate == selectedDate.returningDate &&
      currentFlight.departureDate == selectedDate.departureDate &&
      currentFlight.price == selectedDate.price
    );
  }
};

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
      rawDate: key,
      isTitle: true
    })
  );

  firstColumnFlightMatrix.unshift({}); //Primer item de la matriz vacío

  flightsWithColumnHeader.unshift(firstColumnFlightMatrix);

  return flightsWithColumnHeader;
};

const groupFlightsByField = (flights, fieldName) => {
  return groupBy(flights, fieldName);
};

const addFlagAttributes = (columns, selectedDate, flightWithMinPrice) =>
  map(columns, column => {
    forEach(column, flight => {
      flight["isSelectedFlight"] = isSelectedFlight(flight, selectedDate);
      flight["isBestPrice"] =
        flightWithMinPrice && flight.price == flightWithMinPrice.price;
      return flight;
    });
    return column;
  });

export default (
  pricesByDates,
  departureDateTitle,
  returnDateTitle,
  selectedDate
) => {
  const flightWithMinPrice = minBy(pricesByDates, "price");

  return addFlagAttributes(
    addFirstRowHeader(
      departureDateTitle,
      groupFlightsByField(pricesByDates, "departureDate"),
      addFirstColumnHeader(
        returnDateTitle,
        groupFlightsByField(pricesByDates, "returningDate")
      )
    ),
    selectedDate,
    flightWithMinPrice
  );
};
