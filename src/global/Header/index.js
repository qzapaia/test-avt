import React from 'react';
import PropTypes from 'prop-types';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';
import Logo from '../Logo';
import Text from '../Text';
import Nav from '../Nav';
import Link from '../Link';
import {Container, LogoContainer, Slogan} from './styled';

const Header = ({currentLocation, phoneText}) => (
  <Container>
    <LogoContainer>
      <Logo href="http://www.avantrip.com/"/>
      <Slogan
        type="m"
        tag='h1'
        color="brand">
          Viajar es la guita mejor invertida
      </Slogan>
    </LogoContainer>
    <ContactAndPhoneInfo phoneText={phoneText} />
    <Nav currentLocation={currentLocation}/>
  </Container>
)

Header.propTypes = {
  phoneText: PropTypes.string
}

export default Header;
