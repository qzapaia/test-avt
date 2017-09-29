
import React from 'react';
import GlobalInputRadio from '../../global/InputRadio';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalInputRadio {...props} />
  </ThemeProvider>
)

  