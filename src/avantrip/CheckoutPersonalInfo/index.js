
import React from 'react';
import GlobalCheckoutPersonalInfo from '../../global/CheckoutPersonalInfo';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalCheckoutPersonalInfo {...props} />
  </ThemeProvider>
)

  