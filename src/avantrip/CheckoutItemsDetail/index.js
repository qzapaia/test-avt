
import React from 'react';
import GlobalCheckoutItemsDetail from '../../global/CheckoutItemsDetail';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalCheckoutItemsDetail {...props} />
  </ThemeProvider>
)

  