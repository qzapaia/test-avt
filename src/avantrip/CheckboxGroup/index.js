
import React from 'react';
import GlobalCheckboxGroup from '../../global/CheckboxGroup';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalCheckboxGroup {...props} />
  </ThemeProvider>
)

  