import React from "react";
import {withState, compose} from "recompose";

import HomeSubscribe from "./homeSubscribe";
import TripSubscribe from "./tripSubscribe";

import { storiesOf, action } from "@storybook/react";

import generalDecorator from "../../stories.decorator.js";

import theme from "../styled.theme";
import readme from "./README.md";
import reducer from "./reducer";

const enhace = compose(
  withState("subscribedData", "onSubscribe", {}),
  withState("email", "onChangeEmail", "")
);

const HomeSubscribeWithState = enhace((props)=>{
  const {onSubscribe, onChangeEmail} = props;

  const onChangeHandler = value => {
    action("onChange Email")(value);
    onChangeEmail(value);
  }

  const onSubscribeHandler = data => {
    action("onSubscribe")(JSON.stringify(data));
    onSubscribe(data);
  }

  return <HomeSubscribe {...props}
    onChange={onChangeHandler}
    onSubscribe={onSubscribeHandler}
  />
});

const TripSubscribeWithState = enhace((props)=>{
  const {onSubscribe, onChangeEmail} = props;

  const onChangeHandler = value => {
    action("onChange Email")(value);
    onChangeEmail(value);
  }

  const onSubscribeHandler = data => {
    action("onSubscribe")(JSON.stringify(data));
    onSubscribe(data);
  }

  return <TripSubscribe {...props}
    onChange={onChangeHandler}
    onSubscribe={onSubscribeHandler}
  />
});

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
  .add("Suscribirme a newsletters", () => (
    <HomeSubscribeWithState title="Recibí nuestras últimas ofertas" />
  ))
  .add("Suscribirme a newsletters de un destino", () => (
    <TripSubscribeWithState
      value={{ city: "Buenos Aires" }}
      title={`Te avisamos cuando tengamos los precios
      más bajos a [city].`}
    />
  ))
  .add("Suscribirme a newsletters withData", () => (
    <HomeSubscribe title="Recibí nuestras últimas ofertas" />
  ))
  .add("Suscribirme a newsletters de un destino withData", () => (
    <TripSubscribe
      value={{ city: "Buenos Aires" }}
      title={`Te avisamos cuando tengamos los precios
      más bajos a [city].`}
    />
  ))
  .add("Suscribcion con error", () => (
    <HomeSubscribe
      title="Recibí nuestras últimas ofertas"
      subscriptionStatus="error"
     />
  ))
  .add("Suscribcion satisfactoria", () => (
    <HomeSubscribe
      title="Recibí nuestras últimas ofertas"
      subscriptionStatus="success"
     />
  ))
  .add("Suscribcion a un destino con error", () => (
    <TripSubscribe
      value={{ city: "Buenos Aires" }}
      title={`Te avisamos cuando tengamos los precios
      más bajos a [city].`}
      subscriptionStatus="error"
     />
  ))
  .add("Suscribcion a un destino satisfactoria", () => (
    <TripSubscribe
      value={{ city: "Buenos Aires" }}
      title={`Te avisamos cuando tengamos los precios
      más bajos a [city].`}
      subscriptionStatus="success"
     />
  ));
