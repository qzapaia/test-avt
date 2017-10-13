## Description
Barra de navegación de Avantrip.

## Basic use

```javascript
import Nav from 'avantrip-react/avantrip/Nav';

const pathNames = [
  { id: 'vuelos',   name: 'Vuelos',   url:'http://www.avantrip.com', icon: 'Vuelos'},
  { id: 'hoteles',  name: 'Hoteles',  url:'http://www.avantrip.com', icon: 'Hotel'},
  { id: 'paquetes', name: 'Paquetes',    url:'http://www.avantrip.com', icon: 'Paquetes'},
  { id: 'autos',    name: 'Autos',    url:'http://www.avantrip.com', icon: 'Autos'},
  { id: 'pasesesdisney', name: 'Pases Disney', url:'http://www.avantrip.com', icon: 'PasesDisney'},
  { id: 'cruceros',    name: 'Cruceros',    url:'http://www.avantrip.com', icon: 'Cruceros'},
  { id: 'seguros',    name: 'Seguros',    url:'http://www.avantrip.com', icon: 'Lock'},
];

export default () => (
  <Nav currentPathname="/vuelos/">
  {pathNames.map(path =>
      <span id={path.id} icon={path.icon} href={path.url}>{path.name}</span>
  )}
  </Nav>
)
```


## Props

#### `currentPathname={<String>}`
Especifica el Pathname. Según este valor selecciona una de
las opciones del menu de navegación.
