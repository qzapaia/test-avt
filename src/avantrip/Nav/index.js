
import React from 'react';
import GlobalNav from '../../global/Nav';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalNav {...props} />
  </ThemeProvider>
)
