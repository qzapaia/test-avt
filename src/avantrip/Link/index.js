
import React from 'react';
import GlobalLink from '../../global/Link';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalLink {...props} />
  </ThemeProvider>
)

  