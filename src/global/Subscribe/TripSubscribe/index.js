import React from "react";
import PropTypes from "prop-types";
import {Container, FormContainer, SubscribeContainer, MainTitle, Status} from "./styled";

import InputText from "../../InputText";
import Button from "../../Button";
import Text from "../../Text";
import Icon from "../../Icon";

import {
  ERROR_STATE,
  SUCCESS_STATE,
  INITIAL_STATE,
  SEARCH_TYPE
} from "../constants";

const preventFormatAndContinueWith = (next, email, value) => e => {
  e.preventDefault();
  next({
    type: SEARCH_TYPE,
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
      <SubscribeContainer>
        <MainTitle>
          <Icon id="Notifications" width='32px' height='32px' color='primary' />
          <Text type='m'>
            {title && title.replace("[city]", value.city)}
          </Text>
        </MainTitle>
        <FormContainer
          onSubmit={preventFormatAndContinueWith(onSubscribe, email, value)}
        >
          <InputText
            placeholder={"Ingresá tu email"}
            value={email}
            onChange={value => onChange(value)}
          />
          <Button type="scta">Crear Alerta</Button>
        </FormContainer>
      </SubscribeContainer>
    )}
    {subscriptionStatus == SUCCESS_STATE && (
      <Status>
        <Icon id="Mood" width='32px' height='32px' color='success' />
        <Text>
          Tu alerta de Vuelos baratos a
          <Text tag='strong'>{value.city}</Text>
          <Text>
            fue creada con éxito! Te vamos a avisar
            cuando tengamos los mejores precios.
          </Text>
        </Text>
      </Status>
    )}
    {subscriptionStatus == ERROR_STATE && (
      <Status>
        <Icon id="MoodBad" width='32px' height='32px' color='danger' />
        <Text>Ocurrió un error. Intentalo más tarde.</Text>
      </Status>
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
