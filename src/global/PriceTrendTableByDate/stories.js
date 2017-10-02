import React from "react";
import PriceTrendTableByDate from "./";

import moment from "moment";
import { random } from "lodash";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withState } from "recompose";

import generalDecorator from "../../stories.decorator.js";
import PriceTrendTableByDateWithData from "./withData";

import theme from "../styled.theme";
import readme from "./README.md";

const searchData = {
  origin: "BUE",
  destination: "MIA",
  departureDate: "2018-01-01",
  returningDate: "2018-01-08",
  channel: "Desktop",
  portal: "avantrip",
  cabinClass: "Economy",
  passengers: {
    adults: 1,
    children: 0,
    infants: 0
  }
};

const getThreeDatesBeforeAndAfter = date => {
  const dates = [];

  dates.push(
    moment(date)
      .subtract(3, "days")
      .format()
  );
  dates.push(
    moment(date)
      .subtract(2, "days")
      .format()
  );
  dates.push(
    moment(date)
      .subtract(1, "days")
      .format()
  );
  dates.push(moment(date).format());
  dates.push(
    moment(date)
      .add(1, "days")
      .format()
  );
  dates.push(
    moment(date)
      .add(2, "days")
      .format()
  );
  dates.push(
    moment(date)
      .add(3, "days")
      .format()
  );

  return dates;
};

const genererateDepartureDate = today =>
  today.add(random(1, 15), "days").format();

const genererateArrivalDate = today =>
  today.add(random(20, 30), "days").format();

const generateRandomFlightDates = (departureDates, arrivalDates) =>
  departureDates.reduce(
    (acc, d) =>
      acc.concat(
        arrivalDates.map(r => ({
          returningDate: r,
          departureDate: d,
          price: random(11000, 30000)
        }))
      ),
    []
  );

const today = moment();
const departureDate = genererateDepartureDate(today);
const arrivalDate = genererateArrivalDate(today);

const randomFlightDates = generateRandomFlightDates(
  getThreeDatesBeforeAndAfter(departureDate),
  getThreeDatesBeforeAndAfter(arrivalDate)
);

const enhace = withState("selectedFlight", "onClickDate", {});

const PriceTrendTableByDateWithState = enhace(props => {
  const { selectedDate } = props;

  const clickHandler = selectedFlight => {
    action("click")(selectedFlight);
  };

  return (
    <PriceTrendTableByDate
      {...props}
      pricesByDates={randomFlightDates}
      selectedReturningDate={arrivalDate}
      selectedDepartureDate={departureDate}
      selectedDate={selectedDate}
      onClick={clickHandler}
    />
  );
});

storiesOf("global/PriceTrendTableByDate", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme
    })
  )
  .add("Default", () => <PriceTrendTableByDateWithState />)
  .add("Con datos de la API", () => (
    <PriceTrendTableByDateWithData
      origin={searchData.origin}
      destination={searchData.destination}
      departureDate={searchData.departureDate}
      returningDate={searchData.returningDate}
      cabinClass={searchData.cabinClass}
      passengersAdults={searchData.passengers.adults}
      passengersChildren={searchData.passengers.children}
      passengersInfants={searchData.passengers.infants}
    />
  ))
  .add("Con un título personalizado", () => (
    <PriceTrendTableByDateWithState
      departureDateTitle={<span>Partida</span>}
      returnDateTitle={<span>Llegada</span>}
    />
  ));