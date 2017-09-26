import React from "react";

import PriceTrendCalendar from "./";
import PriceTrendCalendarWithData from "./withData";

import moment from "moment";
import { random } from "lodash";

import withReadme from "storybook-readme/with-readme";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { withState, compose } from "recompose";

import theme from "../styled.theme";
import readme from "./README.md";

import reducer from "./reducer";

import generalDecorator from "../../stories.decorator.js";

const addReadme = comp => withReadme(readme, comp);

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose

const data = [];

let date = moment();
for (var y = 0; y < 12; y++) {
  let nextMonth = date.clone().add(y, "month");
  for (var i = 0; i < nextMonth.daysInMonth(); i++) {
    data.push({
      date: nextMonth.add(1, "days").format("YYYY-MM-DD"),
      price: random(20000, 1000)
    });
  }
}

const enhace = compose(
  withState("counter", "increment", data),
  withState("selectedMonth", "onChangeMonth", "")
);

const PriceTrendCalendarWithState = enhace(props => {
  // enchufar tu component con el estado simulado
  const { counter, increment, selectedMonth, onChangeMonth } = props;

  const onDaySelected = value => {
    action("click")(value);
  };

  const onMonthSelected = value => {
    action("change")(value);
    onChangeMonth(value);
  };

  return (
    <PriceTrendCalendar
      {...props}
      selectedMonth={selectedMonth}
      onMonthSelected={onMonthSelected}
      onDaySelected={onDaySelected}
    />
  );
});

storiesOf("avantrip/PriceTrendCalendar", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme,
      reducer: {
        histogram: reducer
      }
    })
  )
  .add("Default", addReadme(() => <PriceTrendCalendarWithState data={data} />))
  .add(
    "WithData",
    addReadme(() => (
      <PriceTrendCalendarWithData
        origin="BUE"
        destination="NYC"
        dateTo="2017-10-08"
        dateFrom="2017-10-01"
        adults="1"
        children="0"
        babies="0"
        minDepartureMonthYear="2017-09"
        maxDepartureMonthYear="2018-09"
        minDepartureDate="2017-09-24"
        maxDepartureDate="2018-09-22"
      />
    ))
  );
