
import React from 'react';
import GlobalPriceTrendCalendar from '../../global/PriceTrendCalendar';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalPriceTrendCalendar {...props} />
  </ThemeProvider>
)

  