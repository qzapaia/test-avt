import React from 'react';
import GlobalPriceTrendTableByDateWithData from '../../global/PriceTrendTableByDate/withData';
import { ThemeProvider } from 'styled-components';

const componentTheme = {
  color:'blue'
}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalPriceTrendTableByDateWithData {...props} portal="qv" />
  </ThemeProvider>
)
