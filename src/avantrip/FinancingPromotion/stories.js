import React from "react";
import FinancingPromotion from "./";

import { storiesOf } from "@storybook/react";

import generalDecorator from "../../stories.decorator.js";
import FinancingPromotionWithData from "./withData";

import theme from "../styled.theme";
import readme from "./README.md";

storiesOf("avantrip/FinancingPromotion", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme
    })
  )
  .add("Default", () => (
    <FinancingPromotion
      banner="https://static.avantrip.com/fkt-flight/images/Avantrip Banner Financiacion 20170817.jpg" />
  ))
  .add("With data", () => <FinancingPromotionWithData />);
