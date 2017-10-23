import React from 'react';
import GlobalTest from '../../global/Test';
import { ThemeProvider } from 'styled-components';
import customizationTheme from './theme';

export default (props) => (
  <ThemeProvider theme={customizationTheme}>
    <GlobalTest {...props} />
  </ThemeProvider>
)
