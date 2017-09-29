
import React from 'react';
import GlobalIcon from '../../global/Icon';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalIcon {...props} />
  </ThemeProvider>
)

  