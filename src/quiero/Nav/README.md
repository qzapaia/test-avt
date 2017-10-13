## Description
Barra de navegación de Quiero Viajes.

## Basic use

```javascript
import Nav from 'avantrip-react/quiero/Nav';

const pathNames = [
  { id: 'vuelos',   name: 'Vuelos',   url:'http://www.avantrip.com', icon: ''},
  { id: 'hoteles',  name: 'Hoteles',  url:'http://www.avantrip.com', icon: ''},
  { id: 'paquetes', name: 'Paquetes',    url:'http://www.avantrip.com', icon: ''},
  { id: 'autos',    name: 'Autos',    url:'http://www.avantrip.com', icon: ''},
  { id: 'pasesesdisney', name: 'Pases Disney', url:'http://www.avantrip.com', icon: ''},
  { id: 'cruceros',    name: 'Cruceros',    url:'http://www.avantrip.com', icon: ''},
  { id: 'eminent',    name: 'Exlusivo Eminent',    url:'http://www.avantrip.com', icon: ''},
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
