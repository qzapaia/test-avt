
import React from 'react';
import GlobalTripSubscribe from '../../global/TripSubscribe';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalTripSubscribe {...props} />
  </ThemeProvider>
)

  