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
Información del usuario. deve tener la forma:

```javascript
{
  email: [string],
  name: [string],
  image:[string]
}
```
