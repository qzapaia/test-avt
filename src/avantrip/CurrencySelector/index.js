
import React from 'react';
import GlobalCurrencySelector from '../../global/CurrencySelector';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalCurrencySelector {...props} />
  </ThemeProvider>
)

  