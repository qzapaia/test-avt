import React from 'react';
import GlobalFinancingPromotion from '../../global/FinancingPromotion';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFinancingPromotion {...props} />
  </ThemeProvider>
)
