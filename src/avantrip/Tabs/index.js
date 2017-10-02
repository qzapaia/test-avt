
import React from 'react';
import GlobalTabs from '../../global/Tabs';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalTabs {...props} />
  </ThemeProvider>
)

  