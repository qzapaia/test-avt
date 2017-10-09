import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Signup from "../Signup/withData";

import { SignupFacebook as SignupFacebookContainer } from "./styled";

import { withState } from "recompose";

const enhace = withState("isVisible", "clickSignup", false);

const SignupFacebook = ({ isVisible, clickSignup }) => (
  <SignupFacebookContainer>
    <span onClick={e => clickSignup(!isVisible)}>
      <Icon color="primary" id="Person" width="16px" height="16px" />
      Ingresar
    </span>
    {isVisible && <Signup/>}
  </SignupFacebookContainer>
);

export default enhace(SignupFacebook);
