import React from 'react';
import GlobalButton from '../../global/Button';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalButton {...props} />
  </ThemeProvider>
)
