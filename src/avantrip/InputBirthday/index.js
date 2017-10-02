
import React from 'react';
import GlobalInputBirthday from '../../global/InputBirthday';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalInputBirthday {...props} />
  </ThemeProvider>
)

  