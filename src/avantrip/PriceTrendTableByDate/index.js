
import React from 'react';
import GlobalPriceTrendTableByDate from '../../global/PriceTrendTableByDate';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalPriceTrendTableByDate {...props} />
  </ThemeProvider>
)

  