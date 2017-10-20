import React from "react";
import PropTypes from 'prop-types';

import Chart from "./withData";
import moment from "moment";

import generalDecorator from '../../stories.decorator.js';
import withReadme from "storybook-readme/with-readme";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { withState, compose } from "recompose";

import { ThemeProvider } from "styled-components";

import theme from "../styled.theme";
import readme from "./README.md";

const addReadme = comp => withReadme(readme, comp);

const data = [];
const bestPrice = 2453;

let date = moment();
for (var i = 0; i < 31; i++) {
  date = date.add(1, "days");
  data.push({
    price: Math.round( Math.random() * (20000 - 1000) + 1000),
    date: date.format("YYYY-MM-DD"),
    month:9,
    label: date.format("DD MMM"),
    travelDays:-30,
  });
}

// agregamos el ultimo para que conincida el best price y se pinte de verde
data.push({
  price: bestPrice,
  date: date.format("YYYY-MM-DD"),
  month:9,
  label: date.format("DD MMM"),
  travelDays:-30,
});

const clickHandler = value => {
  action("click")(value);
};

const CustomTooltip = ({active, payload, label}) => (
  <div>
    {active && <div>
      <p>{payload[0].payload.name}</p>
      <p>ARS {payload[0].payload.price}</p>
    </div>}
  </div>
);

storiesOf("global/Chart", module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add(
    "Default",
    addReadme(() => (
      <ThemeProvider theme={theme}>
        <Chart data={data} value="price" label="name" onClick={clickHandler} />
      </ThemeProvider>
    ))
  )
  .add(
    "With custom Bar",
    addReadme(() => (
      <ThemeProvider theme={theme}>
        <Chart
          data={data}
          value="price"
          label="label"
          onClick={clickHandler}
          renderBar={args => {
            if (args.price == bestPrice) {
              args.fill = "#94c627";
            }
            return args;
          }}
        />
     
      </ThemeProvider>
    ))
  )
  .add(
    "With custom Tooltip",
    addReadme(() => (
      <ThemeProvider theme={theme}>
        <Chart
          data={data}
          value="price"
          label="label"
          onClick={clickHandler}
          CustomTooltip={CustomTooltip}
          renderBar={args => {
          if (args.price == bestPrice) {
            args.fill = "#94c627";
          }
          return args;
          }}
        />
      </ThemeProvider>
    )))
