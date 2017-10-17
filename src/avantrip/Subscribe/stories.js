import React from "react";

import HomeSubscribe from "./homeSubscribe";
import TripSubscribe from "./tripSubscribe";
import enhaceStory from "../../global/Subscribe/storiesEnhace";

import { storiesOf } from "@storybook/react";

import generalDecorator from "../../stories.decorator.js";

import theme from "../styled.theme";
import readme from "../../global/Subscribe/README.md";
import reducer from "../../global/Subscribe/reducer";

storiesOf("avantrip/Subscribe", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme,
      reducer: {
        subscribe: reducer
      }
    })
  )
  .add("Suscribirme a newsletters", () => {
    const HomeSubscribeEnhaced = enhaceStory(HomeSubscribe);
    return <HomeSubscribeEnhaced title="Recibí nuestras últimas ofertas" />;
  })
  .add("Suscribirme a newsletters de un destino", () => {
    const TripSubscribeEnhaced = enhaceStory(TripSubscribe);
    return (
      <TripSubscribeEnhaced
        value={{ city: "Buenos Aires" }}
        title={`Te avisamos cuando tengamos los precios
        más bajos a [city].`}
      />
    );
  });
