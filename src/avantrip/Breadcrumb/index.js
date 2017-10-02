import React from 'react';
import GlobalBreadcrum from '../../global/Breadcrumb';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalBreadcrum {...props} />
  </ThemeProvider>
)
