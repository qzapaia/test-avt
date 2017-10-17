import React from "react";
import PropTypes from "prop-types";
import Container from "./tripSubscribe.styled";

import InputText from "../InputText";
import Button from "../Button";
import Text from "../Text";
import Icon from "../Icon";

import {
  ERROR_STATE,
  SUCCESS_STATE,
  INITIAL_STATE,
  SEARCH_TYPE
} from "./constants";

const preventFormatAndContinueWith = (next, email, value) => e => {
  e.preventDefault();
  next(SEARCH_TYPE, {
    email: email,
    city: value.city
  });
};

const TripSubscribe = ({
  email,
  title,
  onSubscribe,
  onChange,
  subscriptionStatus,
  value
}) => (
  <Container>
    {subscriptionStatus == INITIAL_STATE && (
      <div>
        <Text>
          <Icon id="Notifications" size="l" />
          {title && title.replace("[city]", value.city)}
        </Text>
        <form
          onSubmit={preventFormatAndContinueWith(onSubscribe, email, value)}
        >
          <input type="HIDDEN" name="city" value={value.city} />
          <InputText
            label={"Email"}
            value={email}
            onChange={value => onChange(value)}
          />
          <Button type="scta">Crear Alerta</Button>
        </form>
      </div>
    )}
    {subscriptionStatus == SUCCESS_STATE && (
      <div>
        <Icon id="Mood" />
        <Text>
          Tu alerta de Vuelos baratos a
          <strong>{value.city}</strong> fue creada con éxito! Te vamos a avisar
          cuando tengamos los mejores precios.
        </Text>
      </div>
    )}
    {subscriptionStatus == ERROR_STATE && (
      <Text>Ocurrió un error. Intentalo más tarde.</Text>
    )}
  </Container>
);

TripSubscribe.propTypes = {
  email: PropTypes.string,
  onSubscribe: PropTypes.func.isRequired,
  value: PropTypes.object,
  subscriptionStatus: PropTypes.oneOf(["", SUCCESS_STATE, ERROR_STATE])
};

TripSubscribe.defaultProps = {
  subscriptionStatus: ""
};

export default TripSubscribe;
