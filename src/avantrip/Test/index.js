import React from 'react';
import GlobalTest from '../../global/Test';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalTest {...props} />
  </ThemeProvider>
)
