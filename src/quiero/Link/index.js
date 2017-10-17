import React from 'react';
import GlobalLink from '../../global/Link';
import { ThemeProvider } from 'styled-components';

const componentTheme = {
  linkColor : "#ff6600",
  linkDeco: "none",
  decoHover: "underline",
  decoVisited: "none"
}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalLink {...props} />
  </ThemeProvider>
)
