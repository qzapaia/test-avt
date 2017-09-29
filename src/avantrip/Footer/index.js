
import React from 'react';
import GlobalFooter from '../../global/Footer';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalFooter {...props} />
  </ThemeProvider>
)

  