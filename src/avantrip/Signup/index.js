
import React from 'react';
import GlobalSignup from '../../global/Signup';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalSignup {...props} />
  </ThemeProvider>
)

  