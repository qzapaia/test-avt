
import React from 'react';
import GlobalContactAndPhoneInfo from '../../global/ContactAndPhoneInfo';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalContactAndPhoneInfo {...props} />
  </ThemeProvider>
)

  