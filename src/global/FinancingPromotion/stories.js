import React from "react";
import FinancingPromotion from "./";

import { storiesOf } from "@storybook/react";

import generalDecorator from "../../stories.decorator.js";
import FinancingPromotionWithData from "./withData";

import theme from "../styled.theme";
import readme from "./README.md";

const mockData = {
  image: "https://static.avantrip.com/fkt-flight/images/Avantrip Banner Financiacion 20170817.jpg"
}

storiesOf("global/FinancingPromotion", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme
    })
  )
  .add("Default", () => (
    <FinancingPromotion
      data={mockData} />
  ))
  .add("With data", () => <FinancingPromotionWithData />);
