
import React from 'react';
import GlobalSubscribe from '../../global/Subscribe/TripSubscribe/withData';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalSubscribe {...props} />
  </ThemeProvider>
)
