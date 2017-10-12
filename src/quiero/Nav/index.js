
import React from 'react';
import GlobalNav from '../../global/Nav';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';

const componentTheme = (parentTheme) => defaults(parentTheme,{
  ulJustifyContent : "flex-center",
  liMaxWidth: "100px",
  divLineHeight: "36px",
  divHoverColor: "black",
  divHoverBgColor: "orange",
  divBeforeBgColor: "orange",
});

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalNav {...props} />
  </ThemeProvider>
)
