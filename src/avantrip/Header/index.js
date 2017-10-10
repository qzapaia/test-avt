import React from "react";
import PropTypes from "prop-types";

import ContactAndPhoneInfo from "../ContactAndPhoneInfo";
import {
  Container,
  LogoContainer,
  Slogan,
  MaxWidth,
  RightNav,
  MyTicket
} from "./styled";
import Logo from "../Logo";
import Text from "../Text";
import Nav from "../Nav";
import Link from "../Link";
import Icon from "../Icon";
import Signup from "../Signup/withData";
import PurchaseAccess from "../PurchaseAccess/withData";
import UserNav from "../UserNav/withData";
import SignupFacebook from "./SignupFacebook";
import MyPurchase from "./MyPurchase";

import { withState, compose } from "recompose";

const enhace = withState("isVisible", "clickSignup", false);


const Header = ({ currentLocation, phoneText, userData, media, layout }) => (
  <Container layout={media.size}>
    <MaxWidth >
      <LogoContainer mobile={media.size < 2}>
        <Logo href="http://www.avantrip.com/" />
        <Slogan tag='h1' color="brand">Viajar es la guita mejor invertida</Slogan>
      </LogoContainer>
      <RightNav>
        {!userData && <SignupFacebook />}
        <MyPurchase />
        <ContactAndPhoneInfo phoneText={phoneText} />
        <UserNav />
      </RightNav>
    </MaxWidth>
    <Nav currentPathname={currentLocation} />
  </Container>
);

Header.propTypes = {
  phoneText: PropTypes.string
};

export default enhace(Header);
