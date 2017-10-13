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
    <GlobalNav {...props}>
        <span id='vuelos' name='Vuelos' url='http://www.avantrip.com' icon='Vuelos'>
          Vuelos
        </span>
        <span id='hoteles' name='Hoteles' url='http://www.avantrip.com' icon='Hotel'>
          Hoteles
        </span>
        <span id='paquetes' name='Paquetes' url='http://www.avantrip.com' icon='Paquetes'>
          Paquetes
        </span>
        <span id='autos' name='Autos' url='http://www.avantrip.com' icon='Autos'>
          Autos
        </span>
        <span id='pasesesdisney' name='Pases Disney' url='http://www.avantrip.com' icon='PasesDisney'>
          Pases Disney
        </span>
        <span id='cruceros' name='Cruceros' url='http://www.avantrip.com' icon='Cruceros'>
          Cruceros
        </span>
        <span id='seguros' name='Seguros' url='http://www.avantrip.com' icon='Lock'>
          Seguros
        </span>
    </GlobalNav>
  </ThemeProvider>
)
