
import React from 'react';
import GlobalNav from '../../global/Nav';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';

const componentTheme = (parentTheme) => defaults(parentTheme,{
  navJustifyContent : "flex-center",
  itemMaxWidth: "100px",
  containerLineHeight: "36px",
  containerHoverColor: "black",
  containerHoverBgColor: "orange",
  containerBeforeBgColor: "orange",
});

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalNav {...props} />
  </ThemeProvider>
)
