
import React from 'react';
import PropTypes from 'prop-types';
import Link from './styled';

const LinkContainer = ({href, icon, target, children}) => (
  <Link href={href} target={target}>
    {icon}{children}
  </Link>
)

LinkContainer.propTypes = {
  target: PropTypes.oneOf(["_blank", "_self","_parent","_top", "framename"]),
  href: PropTypes.string,
  icon: PropTypes.node
}

LinkContainer.defaultProps = {
  target: '_self'
}

export default Link;
