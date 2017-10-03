import React from 'react';
import Global{{componentName}}WithData from '../../global/{{componentName}}/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Global{{componentName}}WithData {...props} />
  </ThemeProvider>
)
