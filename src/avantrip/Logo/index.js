
import React from 'react';
import GlobalLogo from '../../global/Logo';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalLogo {...props} />
  </ThemeProvider>
)

  