
import React from 'react';
import GlobalFareDetail from '../../global/FareDetail';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalFareDetail {...props} />
  </ThemeProvider>
)

  