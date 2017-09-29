
import React from 'react';
import GlobalProductCard from '../../global/ProductCard';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalProductCard {...props} />
  </ThemeProvider>
)

  