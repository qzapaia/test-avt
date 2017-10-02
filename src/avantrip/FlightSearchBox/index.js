
import React from 'react';
import GlobalFlightSearchBox from '../../global/FlightSearchBox';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalFlightSearchBox {...props} />
  </ThemeProvider>
)

  