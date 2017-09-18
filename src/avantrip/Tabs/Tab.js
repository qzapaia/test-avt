import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({id, title, children}) => (
  <div>
    {children}
  </div>
)

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Tab;
