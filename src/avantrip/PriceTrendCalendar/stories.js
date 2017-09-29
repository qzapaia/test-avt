import React from "react";

import PriceTrendCalendarWithData from "./withData";

import withReadme from "storybook-readme/with-readme";
import { storiesOf } from "@storybook/react";

import theme from "../styled.theme";
import readme from "./README.md";

import reducer from "../../global/PriceTrendCalendar/reducer";

import generalDecorator from "../../stories.decorator.js";

import moment from "moment";

const addReadme = comp => withReadme(readme, comp);

const mockData = {
  dateTo: moment().add(7, "day").add(1, "month").format("YYYY-MM-DD"),
  dateFrom: moment().add(1, "month").format("YYYY-MM-DD"),
  minDepartureMonthYear: moment().format("YYYY-MM"),
  maxDepartureMonthYear: moment().add(1, "year").format("YYYY-MM"),
  minDepartureDate: moment().add(2, "day").format("YYYY-MM-DD"),
  maxDepartureDate: moment().add(1, "year").format("YYYY-MM-DD")
}

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
        destination="MIA"
        dateTo={mockData.dateTo}
        dateFrom={mockData.dateFrom}
        adults="1"
        children="0"
        babies="0"
        minDepartureMonthYear={mockData.minDepartureMonthYear}
        maxDepartureMonthYear={mockData.maxDepartureMonthYear}
        minDepartureDate={mockData.minDepartureDate}
        maxDepartureDate={mockData.maxDepartureDate}
      />
    ))
  )
  .add(
    "Con un mensaje de renuncia.",
    addReadme(() => (
      <PriceTrendCalendarWithData
        origin="BUE"
        destination="MIA"
        dateTo={mockData.dateTo}
        dateFrom={mockData.dateFrom}
        adults="1"
        children="0"
        babies="0"
        minDepartureMonthYear={mockData.minDepartureMonthYear}
        maxDepartureMonthYear={mockData.maxDepartureMonthYear}
        minDepartureDate={mockData.minDepartureDate}
        maxDepartureDate={mockData.maxDepartureDate}
        disclaimer={`Tarifa por adulto para una estadía de 8 días. Los precios visualizados son los mejores encontrados por los usuarios en los últimos días y podrían no estar actualizados`}
      />
    ))
  )
