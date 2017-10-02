
import React from 'react';
import GlobalInputCheckbox from '../../global/InputCheckbox';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalInputCheckbox {...props} />
  </ThemeProvider>
)

  