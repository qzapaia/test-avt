import React from 'react';
import GlobalFeaturedDealsWithData from '../../global/FeaturedDeals/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFeaturedDealsWithData {...props} />
  </ThemeProvider>
)
