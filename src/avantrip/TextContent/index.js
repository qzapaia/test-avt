
import React from 'react';
import GlobalTextContent from '../../global/TextContent';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalTextContent {...props} />
  </ThemeProvider>
)

  