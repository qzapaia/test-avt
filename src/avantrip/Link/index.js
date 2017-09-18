
import React from 'react';
import PropTypes from 'prop-types';

import ContainerLink from './container.styled';

const Link = ({href, icon, children}) => (
  <ContainerLink href={href}>
    {icon}{children}
  </ContainerLink>
)

Link.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node
}


Link.defaultProps = {
  href:'#'
}

export default Link;
