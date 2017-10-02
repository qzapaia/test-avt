
import React from 'react';
import GlobalRadioGroup from '../../global/RadioGroup';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalRadioGroup {...props} />
  </ThemeProvider>
)

  