
import React from 'react';
import GlobalSelect from '../../global/Select';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalSelect {...props} />
  </ThemeProvider>
)

  