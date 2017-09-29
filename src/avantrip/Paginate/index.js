
import React from 'react';
import GlobalPaginate from '../../global/Paginate';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalPaginate {...props} />
  </ThemeProvider>
)

  