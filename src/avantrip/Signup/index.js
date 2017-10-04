import React from 'react';
import GlobalSignup from '../../global/Signup';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalSignup {...props} />
  </ThemeProvider>
)
