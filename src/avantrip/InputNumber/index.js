
import React from 'react';
import GlobalInputNumber from '../../global/InputNumber';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalInputNumber {...props} />
  </ThemeProvider>
)

  