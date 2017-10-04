import React from 'react';
import GlobalFinancingPromotionWithData from '../../global/FinancingPromotion/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFinancingPromotionWithData {...props} />
  </ThemeProvider>
)
