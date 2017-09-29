
import React from 'react';
import GlobalInputText from '../../global/InputText';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalInputText {...props} />
  </ThemeProvider>
)

  