import React from "react";
import PropTypes from "prop-types";

import { map } from "lodash";

import TableContainer from "./TableContainer.styled";
import PriceDataContainer from "./PriceDataContainer.styled";
import Price from "../Price";

const getBackgroundColor = (
  returningDate,
  departureDate,
  bestFlights,
  currentFlight
) => {
  if (bestFlights.length > 0 && bestFlights[0].price == currentFlight.price) {
    return "green";
  } else if (
    (returningDate == currentFlight.returningDate &&
      departureDate == currentFlight.departureDate) ||
    returningDate == currentFlight.rawDate ||
    departureDate == currentFlight.rawDate
  ) {
    return "lightblue";
  }
};

const PriceData = ({
  fRow,
  selectedReturningDate,
  selectedDepartureDate,
  flightDatesWithMinPrices,
  onClick
}) => {
  return (
    <TableContainer>
      {map(fRow, fColumn => (
        <div>
          {fColumn.title && (
            <PriceDataContainer
              backgroundColor={getBackgroundColor(
                selectedReturningDate,
                selectedDepartureDate,
                {},
                fColumn
              )}
            >
              <div>{fColumn.title}</div>
              <div>{fColumn.day}</div>
              <div>{fColumn.date}</div>
            </PriceDataContainer>
          )}

          {!fColumn.title && (
            <PriceDataContainer
              onClick={e => onClick(fColumn)}
              backgroundColor={getBackgroundColor(
                selectedReturningDate,
                selectedDepartureDate,
                flightDatesWithMinPrices,
                fColumn
              )}
            >
              {(fColumn.title || fColumn.price) && (
                <div>
                  <div>Desde</div>
                  <div>
                    <Price price={fColumn.price} />
                  </div>
                </div>
              )}
            </PriceDataContainer>
          )}
        </div>
      ))}
    </TableContainer>
  );
};

PriceData.propTypes = {
  selectedReturningDate: PropTypes.string,
  selectedDepartureDate: PropTypes.string,
  onClick: PropTypes.func
};

export default PriceData;
