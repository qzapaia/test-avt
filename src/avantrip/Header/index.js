import React from 'react';
import PropTypes from 'prop-types';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';
import Container from './styled';
import Logo from '../Logo';
import Text from '../Text';
import Nav from '../Nav';
import Link from '../Link';
import Signup from '../Signup/withData';
import PurchaseAccess from '../PurchaseAccess/withData';

const Header = ({currentLocation, phoneText}) => (
  <Container>
    <div>
      <Logo href="http://www.avantrip.com/"/>
      <Text
        size="16px"
        color="brand"
        weight="600"
        family="Stag Sans Web">
          Viajar es la guita mejor invertida
      </Text>
    </div>
    <Signup></Signup>
    <PurchaseAccess></PurchaseAccess>
    <ContactAndPhoneInfo phoneText={phoneText} />
    <Nav currentLocation={currentLocation}/>
  </Container>
)

Header.propTypes = {
  phoneText: PropTypes.string
}

export default Header;
