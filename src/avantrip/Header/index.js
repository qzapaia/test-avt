import React from 'react';
import PropTypes from 'prop-types';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';
import {Container, LogoContainer, Slogan, MaxWidth, SignupFacebook, RightNav, MyTicket} from './styled';
import Logo from '../Logo';
import Text from '../Text';
import Nav from '../Nav';
import Link from '../Link';
import Icon from '../Icon';
import Signup from '../Signup/withData';
import PurchaseAccess from '../PurchaseAccess/withData';

const Header = ({currentLocation, phoneText}) => (
  <Container>
    <MaxWidth>

      <LogoContainer>
        <Logo href="http://www.avantrip.com/"/>
        <Slogan
          color="brand"
          tag='h1'
          >
            Viajar es la guita mejor invertida
        </Slogan>
      </LogoContainer>
      <RightNav>
        <SignupFacebook>
          <Icon color='primary' id='Person' width='16px' height='16px' />
          Ingresar
          <Signup />
        </SignupFacebook>
        <MyTicket>
          <Icon color='primary' id='Description' width='16px' height='16px' />
          Mi Compra
          <PurchaseAccess />
        </MyTicket>

          <ContactAndPhoneInfo phoneText={phoneText} />
      </RightNav>
    </MaxWidth>
    <Nav currentLocation={currentLocation}/>

  </Container>
)

Header.propTypes = {
  phoneText: PropTypes.string
}

export default Header;
