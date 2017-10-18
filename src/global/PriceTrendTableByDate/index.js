import React from "react";
import PropTypes from "prop-types";

import { withState } from "recompose";

import moment from "moment";
import { map } from "lodash";

import matrixGenerator from "./selector";

import {Container, PriceDataContainer, RowContainer, FixWidthContainer, PriceData, PriceDataTitle, PriceColor} from "./styled";
import Price from "../Price";
import Text from "../Text";

const getTypeField = (
  selectedDate,
  returningDate,
  departureDate,
  currentFlight
) => {
  if (currentFlight.isSelectedFlight) {
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
    <Container>
      <FixWidthContainer>

        {map(flightDatesMatrix, (fRow, rowIndex) => (
          <RowContainer key={"row" + rowIndex}>
            {map(
              fRow,
              (fColumn, columnIndex) =>
                (fColumn.title && (
                  <PriceDataContainer
                    key={"title" + columnIndex + fColumn.rawDate}
                    className={
                      getTypeField(
                        selectedDate,
                        selectedReturningDate,
                        selectedDepartureDate,
                        fColumn
                      ) || "title"
                    }
                    onMouseOver={e => onMouseOver({})}
                  >
                    <PriceDataTitle>
                      <Text tag='div' color='primary'>
                        {fColumn.title}
                      </Text>
                      <Text tag='div' type='xs'>
                        {fColumn.day}
                      </Text>
                      <Text tag='div' type='xs'>
                        {fColumn.date}
                      </Text>
                    </PriceDataTitle>
                  </PriceDataContainer>
                )) ||
                (!fColumn.title && (
                  <PriceDataContainer
                    key={"field" + columnIndex + fColumn.rawDate}
                    onClick={e => onClick(fColumn)}
                    onMouseOver={e => onMouseOver(fColumn)}
                    className={getTypeField(
                      selectedDate,
                      selectedReturningDate,
                      selectedDepartureDate,
                      fColumn
                    )}
                  >
                    {(fColumn.title || fColumn.price) && (
                      <PriceData>
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
                            <Text type="xs" color="white">
                              El precio más bajo
                            </Text>
                          ) : (
                            <Text type="xs" color="darkergray">
                              Desde
                            </Text>
                          )}
                        </div>
                        <PriceColor>
                          <Price price={fColumn.price} />
                        </PriceColor>
                      </PriceData>
                    )}
                  </PriceDataContainer>
                ))
            )}
          </RowContainer>
        ))}
      </FixWidthContainer>
    </Container>
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

const enhace = withState("selectedDate", "onMouseOver", {})

const PriceTrendTableByDateWithState =  enhace((props) => {
  const { selectedDate, onMouseOver } = props;

  const mouseOverHandler = selectedDate => {
    onMouseOver(selectedDate);
  };

  return (
    <PriceTrendTableByDate {...props}
      onMouseOver={mouseOverHandler} />
  )
});
export default PriceTrendTableByDateWithState;
