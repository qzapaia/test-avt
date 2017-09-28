import React from "react";
import PropTypes from "prop-types";

import moment from "moment";
import { map } from "lodash";

import matrixGenerator from "./selector";

import RowContainer from "./RowContainer.styled";
import PriceDataContainer from "./PriceDataContainer.styled";
import Price from "../Price";
import Text from "../Text";

const getTypeField = (
  selectedDate,
  returningDate,
  departureDate,
  currentFlight
) => {
  if (currentFlight.isSelectedRange) {
    if (currentFlight.isBestPrice) {
      return "bestPriceSelectedDate";
    } else {
      return "selectedDate";
    }
  } else if (currentFlight.isBestPrice) {
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
  selectedDate,
  onClick,
  onMouseOver,
  departureDateTitle,
  returnDateTitle
}) => {
  const flightDatesMatrix = matrixGenerator(
    pricesByDates,
    departureDateTitle,
    returnDateTitle,
    selectedDate
  );

  return (
    <div>
      {map(flightDatesMatrix, (fRow, rowIndex) => (
        <RowContainer key={"row" + rowIndex}>
          {map(
            fRow,
            (fColumn, columnIndex) =>
              (fColumn.title && (
                <PriceDataContainer
                  key={"title" + columnIndex + fColumn.rawDate}
                  type={
                    getTypeField(
                      selectedDate,
                      selectedReturningDate,
                      selectedDepartureDate,
                      fColumn
                    ) || "title"
                  }
                  onMouseOver={e => onMouseOver({})}
                >
                  <div>{fColumn.title}</div>
                  <div>{fColumn.day}</div>
                  <div>{fColumn.date}</div>
                </PriceDataContainer>
              )) ||
              (!fColumn.title && (
                <PriceDataContainer
                  key={"field" + columnIndex + fColumn.rawDate}
                  onClick={e => onClick(fColumn)}
                  onMouseOver={e => onMouseOver(fColumn)}
                  type={getTypeField(
                    selectedDate,
                    selectedReturningDate,
                    selectedDepartureDate,
                    fColumn
                  )}
                >
                  {(fColumn.title || fColumn.price) && (
                    <div>
                      <div>
                        {getTypeField(
                          selectedDate,
                          selectedReturningDate,
                          selectedDepartureDate,
                          fColumn
                        ) == "bestPrice" ||
                        getTypeField(
                          selectedDate,
                          selectedReturningDate,
                          selectedDepartureDate,
                          fColumn
                        ) == "bestPriceSelectedDate" ? (
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
              ))
          )}
        </RowContainer>
      ))}
    </div>
  );
};

PriceTrendTableByDate.propTypes = {
  pricesByDates: PropTypes.array,
  selectedReturningDate: PropTypes.string,
  selectedDepartureDate: PropTypes.string,
  selectedDate: PropTypes.object,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  departureDateTitle: PropTypes.node,
  returnDateTitle: PropTypes.node
};

PriceTrendTableByDate.defaultProps = {
  departureDateTitle: "IDA",
  returnDateTitle: "VUELTA"
};

export default PriceTrendTableByDate;
