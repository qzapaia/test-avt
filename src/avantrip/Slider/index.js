
import React from 'react';
import GlobalSlider from '../../global/Slider';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalSlider {...props} />
  </ThemeProvider>
)

  