
import React from 'react';
import GlobalPurchaseAccess from '../../global/PurchaseAccess';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalPurchaseAccess {...props} />
  </ThemeProvider>
)

  