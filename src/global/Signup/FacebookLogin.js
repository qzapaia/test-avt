import React from "react";
import PropTypes from "prop-types";

import { get } from "lodash";

import { FacebookLogin } from "react-facebook-login-component";
import Container from "./FacebookLogin.styled";


const onSignupHandler = next => data => {
  next({
    email: data.email,
    id: data.id,
    name: data.name,
    image: get(data, "picture.data.url"),
    accessToken: data.accessToken
  });
}

/*
dev: 975071925903200
prod: 534641160036985
*/
const FacebookLoginComponent = ({ onSignup }) => (
  <Container>
    <FacebookLogin
      socialId="975071925903200"
      language="es_ES"
      scope="public_profile,email"
      responseHandler={onSignupHandler(onSignup)}
      xfbml={true}
      fields="id,email,name, picture"
      version="v2.5"
      className="facebook-login"
      buttonText="Ingresar con Facebook"
    />
  </Container>
);

FacebookLoginComponent.propTypes = {
  onSignup:PropTypes.func.isRequired,
}

export default FacebookLoginComponent;
