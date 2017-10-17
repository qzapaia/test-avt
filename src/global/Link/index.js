
import React from 'react';
import PropTypes from 'prop-types';
import Link from './styled';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';

const baseTheme = (parentTheme) => defaults(parentTheme,{
  linkColor : parentTheme.colors.darkergray,
  linkDeco: "none",
  decoHover: "none",
  decoVisited: "none"
});

const LinkContainer = ({href, icon, target, children}) => (
  <ThemeProvider theme={baseTheme}>
    <Link href={href} target={target}>
      {icon}{children}
    </Link>
  </ThemeProvider>
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
