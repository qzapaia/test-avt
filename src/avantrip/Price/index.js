
import React from 'react';
import GlobalPrice from '../../global/Price';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalPrice {...props} />
  </ThemeProvider>
)

  