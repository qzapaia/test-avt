import React from 'react';
import GlobalNav from '../../global/Nav';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';

const componentTheme = (parentTheme) => defaults(parentTheme,{
  navJustifyContent : "space-between",
  itemMaxWidth: "100px",
  containerLineHeight: "36px",
  containerHoverColor: "black",
  containerHoverBgColor: "transparent",
  containerBeforeBgColor: parentTheme.colors.darkergray,
});

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalNav {...props} />
  </ThemeProvider>
)
