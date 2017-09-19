import React from 'react';
import PropTypes from 'prop-types';

const Header = () => (
  <div>
    <h2>Vale por un Header (Rifle!)</h2>
  </div>
)

Header.propTypes = {
  text: PropTypes.node.isRequired
}

export default Header;
