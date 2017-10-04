import React from 'react';
import GlobalSignupWithData from '../../global/Signup/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalSignupWithData {...props} />
  </ThemeProvider>
)
