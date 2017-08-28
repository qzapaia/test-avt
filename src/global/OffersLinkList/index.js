import React from 'react';
import PropTypes from 'prop-types';

const OffersLinkList = ({text}) => (
  <div>{text}</div>
)

OffersLinkList.propTypes = {
  text: PropTypes.string.isRequired
}

OffersLinkList.defaultProps = {
  text:'OffersLinkList component'
}

export default OffersLinkList;
