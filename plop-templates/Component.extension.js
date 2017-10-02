import React from 'react';
import Global{{componentName}} from '../../global/{{componentName}}';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <Global{{componentName}} {...props} />
  </ThemeProvider>
)
