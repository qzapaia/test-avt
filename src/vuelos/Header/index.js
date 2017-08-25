import React from 'react';
import PropTypes from 'prop-types';

const Header = ({text}) => (
  <div>{text}</div>
)

Header.propTypes = {
  text: PropTypes.string.isRequired
}

Header.defaultProps = {
  text:'Header component'
}

export default Header;
