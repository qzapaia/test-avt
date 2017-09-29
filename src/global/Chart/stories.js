import React from "react";
import PropTypes from 'prop-types';

import Chart from "./";
import moment from "moment";

import withReadme from "storybook-readme/with-readme";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { withState, compose } from "recompose";

import { ThemeProvider } from "styled-components";

import theme from "../styled.theme";
import readme from "./README.md";

const addReadme = comp => withReadme(readme, comp);

const data = [];

let date = moment();
for (var i = 0; i < 31; i++) {
  date = date.add(1, "days");
  data.push({
    name: date.format("DD MMM"),
    price: Math.random() * (20000 - 1000) + 1000
  });
}

const clickHandler = value => {
  action("click")(value);
};

const CustomTooltip = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array
  },
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div >
          <p>{payload[0].payload.name}</p>
          <p>ARS {payload[0].payload.price}</p>
        </div>
      );
    }

    return null;
  }
});

storiesOf("global/Chart", module)
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
          label="name"
          onClick={clickHandler}
          renderBar={args => (args.fill = "green") && args}
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
          label="name"
          onClick={clickHandler}
          CustomTooltip={CustomTooltip}
        />
      </ThemeProvider>
    )))
