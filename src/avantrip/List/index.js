
import React from 'react';
import GlobalList from '../../global/List';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalList {...props} />
  </ThemeProvider>
)

  