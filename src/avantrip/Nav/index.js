import React from 'react';
import GlobalNav from '../../global/Nav';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';

const componentTheme = (parentTheme) => defaults(parentTheme,{
  ulJustifyContent : "space-between",
  liMaxWidth: "100px",
  divLineHeight: "36px",
  divHoverColor: "black",
  divHoverBgColor: "transparent",
  divBeforeBgColor: parentTheme.colors.darkergray,
});

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalNav {...props} />
  </ThemeProvider>
)
