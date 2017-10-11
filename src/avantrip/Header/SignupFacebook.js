import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Text from "../Text";
import Signup from "../Signup/withData";

import { SignupFacebookContainer, Login } from "./styled";

import { withState } from "recompose";

const enhace = withState("isVisible", "clickSignup", false);

const SignupFacebook = ({ isVisible, clickSignup }) => (
  <SignupFacebookContainer>
    <Login onClick={e => clickSignup(!isVisible)}>
      <Icon color="primary" id="Person" width="16px" height="16px" />
      <Text>
        Ingresar
      </Text>
    </Login>
    {isVisible && <Signup/>}
  </SignupFacebookContainer>
);

export default enhace(SignupFacebook);
