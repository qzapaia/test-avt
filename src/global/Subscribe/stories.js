import React from "react";

import HomeSubscribe from "./homeSubscribeWithData";
import TripSubscribe from "./tripSubscribeWithData";
import enhaceStory from "./storiesEnhace";

import { storiesOf } from "@storybook/react";

import generalDecorator from "../../stories.decorator.js";

import theme from "../styled.theme";
import readme from "./README.md";
import reducer from "./reducer";

storiesOf("global/Subscribe", module)
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
