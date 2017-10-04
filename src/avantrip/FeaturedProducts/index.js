import React from 'react';
import GlobalFeaturedProducts from '../../global/FeaturedProducts';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFeaturedProducts {...props} />
  </ThemeProvider>
)
