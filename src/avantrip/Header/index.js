import React from 'react';
import PropTypes from 'prop-types';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';
import {Container, LogoContainer, Slogan, MaxWidth} from './styled';
import Logo from '../Logo';
import Text from '../Text';
import Nav from '../Nav';
import Link from '../Link';
// import Signup from '../Signup/withData';
import PurchaseAccess from '../PurchaseAccess/withData';

const Header = ({currentLocation, phoneText}) => (
  <Container>
    <MaxWidth>

      <LogoContainer>
        <Logo href="http://www.avantrip.com/"/>
        <Slogan
          color="brand"
          >
            Viajar es la guita mejor invertida
        </Slogan>
      </LogoContainer>
      {/* WATCH HERE */}
      {/* <Signup />
      <PurchaseAccess /> */}
      <ContactAndPhoneInfo phoneText={phoneText} />
    </MaxWidth>
    <Nav currentLocation={currentLocation}/>

  </Container>
)

Header.propTypes = {
  phoneText: PropTypes.string
}

export default Header;
