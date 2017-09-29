
import React from 'react';
import GlobalCheckoutBillingInfo from '../../global/CheckoutBillingInfo';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalCheckoutBillingInfo {...props} />
  </ThemeProvider>
)

  