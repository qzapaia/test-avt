import React from "react";
import PropTypes from "prop-types";

import ContactAndPhoneInfo from "../ContactAndPhoneInfo";
import {
  Container,
  LogoContainer,
  Slogan,
  MaxWidth,
  RightNav,
  MyPurchaseContainer,
  SignupFacebookContainer
} from "./styled";
import Logo from "../Logo";
import Text from "../Text";
import Nav from "../Nav";
import Link from "../Link";
import Icon from "../Icon";
import Signup from "../Signup/withData";
import PurchaseAccess from "../PurchaseAccess/withData";
import UserNav from "../UserNav/withData";

import { withState, compose } from "recompose";

const enhace = withState("isVisible", "clickVisible", "");

const changeVisibleState = (currentVisibleComp, changeVisibleComp, next) => {
  next(currentVisibleComp != changeVisibleComp ? changeVisibleComp : "");
};

const Header = ({
  currentPathname,
  phoneText,
  userData,
  media,
  isVisible,
  clickVisible
}) => (
  <Container>
    {/* {media.size > 2 && 'desktop'} */}
    <MaxWidth >
      <LogoContainer mobile={media.size < 2}>
        <Logo href="http://www.avantrip.com/" />
        <Slogan tag='h1' color="brand">Viajar es la guita mejor invertida</Slogan>
      </LogoContainer>
      <RightNav>
        {!userData.facebook && (
          <SignupFacebookContainer>
            <span
              onClick={e => changeVisibleState(isVisible, "signup", clickVisible)}>
              <Icon color="primary" id="Person" width="16px" height="16px" />
              Ingresar
            </span>
            {isVisible == "signup" && <Signup />}
          </SignupFacebookContainer>
        )}
        <MyPurchaseContainer>
          <span
            onClick={ e => changeVisibleState(isVisible, "myPurchase", clickVisible)}>
            <Icon color="primary" id="Description" width="16px" height="16px" />
            Mi Compra
          </span>
          {isVisible == "myPurchase" && <PurchaseAccess />}
        </MyPurchaseContainer>
        <ContactAndPhoneInfo phoneText={phoneText} />
        <UserNav />
      </RightNav>
    </MaxWidth>
    <Nav currentPathname={currentPathname} />
  </Container>
);

Header.propTypes = {
  currentPathname: PropTypes.string.isRequired,
  phoneText: PropTypes.string
};

export default enhace(Header);
