import React from "react";
import FeaturedProducts from "./";

import { storiesOf } from "@storybook/react";

import generalDecorator from "../../stories.decorator.js";
import FeaturedProductsWithData from "./withData";

import theme from "../styled.theme";
import readme from "./README.md";

const mockPromotionalFlights = [
  {
    mediaImage:"https://static.avantrip.com/fkt-flight/images/img-cluster-miami.jpg",
    imageTitle: "Volando con American Airlines",
    title: "Miami",
    subtitle: "Ida y vuelta",
    currency: "ARS",
    supportingInfo: "Precio desde",
    price: "14.755",
    href: "https://www.avantrip.com/oportunidades/vuelos-miami"
  },
  {
    mediaImage:"https://static.avantrip.com/fkt-flight/images/img-cluster-madrid.jpg",
    imageTitle: "Volando con Latam",
    title: "Madrid",
    subtitle: "Ida y vuelta",
    currency: "ARS",
    supportingInfo: "Precio desde",
    price: "16.713",
    href: "https://www.avantrip.com/oportunidades/vuelos-madrid"
  }
];

storiesOf("global/FeaturedProducts", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme
    })
  )
  .add("Default", () => <FeaturedProducts products={mockPromotionalFlights} />)
  .add("Promoción de viajes desde API", () => (
    <FeaturedProductsWithData type="promotionalFlights" />
  ))
  .add("Más vendidos desde API", () => (
    <FeaturedProductsWithData type="bestSellers" listMode={true} />
  ));
