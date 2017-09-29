
import React from 'react';
import GlobalCheckout from '../../global/Checkout';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalCheckout {...props} />
  </ThemeProvider>
)

  