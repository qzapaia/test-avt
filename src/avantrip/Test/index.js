
import React from 'react';
import GlobalTest from '../../global/Test';
import { ThemeProvider } from 'styled-components';

const componentTheme = {
  color:'blue'
}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalTest {...props} />
  </ThemeProvider>
)
