import React from 'react';
import GlobalFeaturedProductsWithData from '../../global/FeaturedProducts/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFeaturedProductsWithData {...props} />
  </ThemeProvider>
)
