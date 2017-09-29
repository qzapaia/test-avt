
import React from 'react';
import GlobalNumberGroup from '../../global/NumberGroup';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalNumberGroup {...props} />
  </ThemeProvider>
)

  