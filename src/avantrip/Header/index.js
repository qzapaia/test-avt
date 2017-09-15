import React from 'react';
import PropTypes from 'prop-types';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';
import Container from './container.styled';

const Header = ({phoneText}) => (
  <Container>
    <div>Logo</div>
    <ContactAndPhoneInfo phoneText={phoneText} />
    <div>Nav</div>
  </Container>
)


Header.propTypes = {
  phoneText: PropTypes.string
}

export default Header;
