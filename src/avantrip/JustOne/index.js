
import React from 'react';
import GlobalJustOne from '../../global/JustOne';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalJustOne {...props} />
  </ThemeProvider>
)

  