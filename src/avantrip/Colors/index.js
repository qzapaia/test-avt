
import React from 'react';
import GlobalColors from '../../global/Colors';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalColors {...props} />
  </ThemeProvider>
)

  