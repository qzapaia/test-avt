
import React from 'react';
import GlobalChip from '../../global/Chip';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalChip {...props} />
  </ThemeProvider>
)

  