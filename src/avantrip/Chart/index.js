
import React from 'react';
import GlobalChart from '../../global/Chart';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalChart {...props} />
  </ThemeProvider>
)

  