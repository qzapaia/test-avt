
import React from 'react';
import GlobalTranslations from '../../global/Translations';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalTranslations {...props} />
  </ThemeProvider>
)

  