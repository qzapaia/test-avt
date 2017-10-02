
import React from 'react';
import GlobalHeader from '../../global/Header';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalHeader {...props} />
  </ThemeProvider>
)

  