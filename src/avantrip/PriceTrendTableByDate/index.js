import React from "react";
import PropTypes from "prop-types";

import { map, minBy, reduce } from "lodash";

import matrixGenerator from "./selector";

import RowContainer from "./RowContainer.styled";
import PriceDataContainer from "./PriceDataContainer.styled";
import Price from "../Price";
import Text from "../Text";

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

const getTypeField = (
  returningDate,
  departureDate,
  bestFlights,
  currentFlight
) => {
  if (bestFlights.length > 0 && bestFlights[0].price == currentFlight.price) {
    return "bestPrice";
  } else if (
    (returningDate == currentFlight.returningDate &&
      departureDate == currentFlight.departureDate) ||
    returningDate == currentFlight.rawDate ||
    departureDate == currentFlight.rawDate
  ) {
    return "currentPrice";
  }
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

  const flightDatesMatrix = matrixGenerator(
    pricesByDates,
    departureDateTitle,
    returnDateTitle
  );

  return (
    <div>
      {map(flightDatesMatrix, fRow => (
        <RowContainer>
          {map(fRow, fColumn => (
            <div>
              {fColumn.title && (
                <PriceDataContainer
                  type={
                    getTypeField(
                      selectedReturningDate,
                      selectedDepartureDate,
                      {},
                      fColumn
                    ) || "title"
                  }
                >
                  <div>{fColumn.title}</div>
                  <div>{fColumn.day}</div>
                  <div>{fColumn.date}</div>
                </PriceDataContainer>
              )}

              {!fColumn.title && (
                <PriceDataContainer
                  onClick={e => onClick(fColumn)}
                  type={getTypeField(
                    selectedReturningDate,
                    selectedDepartureDate,
                    flightDatesWithMinPrices,
                    fColumn
                  )}
                >
                  {(fColumn.title || fColumn.price) && (
                    <div>
                      <div>
                        {getTypeField(
                          selectedReturningDate,
                          selectedDepartureDate,
                          flightDatesWithMinPrices,
                          fColumn
                        ) == "bestPrice" ? (
                          <Text type="xs" color="warning">
                            El precio más bajo
                          </Text>
                        ) : (
                          <Text type="xs" color="primary">
                            Desde
                          </Text>
                        )}
                      </div>
                      <div>
                        <Price price={fColumn.price} />
                      </div>
                    </div>
                  )}
                </PriceDataContainer>
              )}
            </div>
          ))}
        </RowContainer>
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
