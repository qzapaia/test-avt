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
  SignupFacebookContainer,
  Login,
  MyPurchaseButton
} from "./styled";
import Logo from "../Logo";
import Text from "../Text";
import Nav from "../Nav";
import Link from "../Link";
import Icon from "../Icon";
import Signup from "../Signup/withData";
import PurchaseAccess from "../PurchaseAccess/withData";
import UserNav from "../UserNav/withData";
import Navigate from '../../global/Navigate';

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
  clickVisible,
  layout
}) => (
  <Container layout={media.size}>
    <MaxWidth>
      <Navigate href='/'>
        <LogoContainer mobile={media.size < 2}>
          <Logo />
          <Slogan tag='h1' color="brand">Viajar es la guita mejor invertida</Slogan>
        </LogoContainer>
      </Navigate>
      <RightNav>
        {!userData.facebook && (
          <SignupFacebookContainer>
            <Login
              onClick={e => changeVisibleState(isVisible, "signup", clickVisible)}>
              <Icon color="primary" id="Person" width="16px" height="16px" />
              Ingresar
            </Login>
            {isVisible == "signup" && <Signup />}
          </SignupFacebookContainer>
        )}
        <MyPurchaseContainer>
          <MyPurchaseButton
            onClick={ e => changeVisibleState(isVisible, "myPurchase", clickVisible)}>
            <Icon color="primary" id="Description" width="16px" height="16px" />
            Mi Compra
          </MyPurchaseButton>
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
