
import React from 'react';
import GlobalExpansionPanel from '../../global/ExpansionPanel';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalExpansionPanel {...props} />
  </ThemeProvider>
)

  