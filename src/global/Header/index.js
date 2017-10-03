import React from 'react';
import PropTypes from 'prop-types';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';
import Logo from '../Logo';
import Text from '../Text';
import Nav from '../Nav';
import Link from '../Link';
import {Container, LogoContainer, Slogan, MaxWidth} from './styled';

const Header = ({currentLocation, phoneText}) => (
  <Container>
    <MaxWidth>
      <LogoContainer>
        <Logo href="http://www.avantrip.com/"/>
        <Slogan
          type="m"
          tag='h1'
          color="brand">
          Viajar es la guita mejor invertida
        </Slogan>
      </LogoContainer>
      {/* <LinksContainer>
        <HeaderLink href="">
          Registrate
        </HeaderLink>
        <HeaderLink href="">
          Mi Compra
        </HeaderLink>
      </LinksContainer> */}
      <ContactAndPhoneInfo phoneText={phoneText} />
    </MaxWidth>
    <Nav currentLocation={currentLocation}/>
  </Container>
)

Header.propTypes = {
  phoneText: PropTypes.string
}

export default Header;
