import React from 'react';
import GlobalFeaturedDeals from '../../global/FeaturedDeals';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFeaturedDeals {...props} />
  </ThemeProvider>
)
