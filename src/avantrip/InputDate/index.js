
import React from 'react';
import GlobalInputDate from '../../global/InputDate';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalInputDate {...props} />
  </ThemeProvider>
)

  