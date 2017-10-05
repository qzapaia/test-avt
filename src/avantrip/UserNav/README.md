## Description
Componente que muestra los datos del usuario logueado y
permite cerrar sesión.

## Basic use

```javascript
import UserNav from 'avantrip-react/avantrip/UserNav';

export default () => (
  <UserNav
    data={string}
    logout={function}
  />
)
```

## Props

#### `logout={<Function>}`
Event handler

#### `data={<Object>}`
Información del usuario. Debe tener la forma:

```javascript
{
  email: [string],
  name: [string],
  urlImage:[string]
}
```

## Redux
Utiliza el reducer y action del componente global/User.
