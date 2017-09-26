import React from "react";

import PriceTrendCalendar from "./";
import PriceTrendCalendarWithData from "./withData";

import withReadme from "storybook-readme/with-readme";
import { storiesOf } from "@storybook/react";

import theme from "../styled.theme";
import readme from "./README.md";

import reducer from "./reducer";

import generalDecorator from "../../stories.decorator.js";

const addReadme = comp => withReadme(readme, comp);

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose



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
  .add(
    "Default",
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
