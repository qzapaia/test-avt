
import React from 'react';
import PropTypes from 'prop-types';

import ContainerLink from './container.styled';

const Link = ({href, icon, target, children}) => (
  <ContainerLink href={href} target={target}>
    {icon}{children}
  </ContainerLink>
)

Link.propTypes = {
  target: PropTypes.oneOf(["_blank", "_self","_parent","_top", "framename"]),
  href: PropTypes.string,
  icon: PropTypes.node
}


Link.defaultProps = {
  target: '_self'
}

export default Link;
