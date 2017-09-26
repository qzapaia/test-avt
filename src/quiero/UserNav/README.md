## Description
Componente encargado de mostrar la información del usuario autenticado en QV!

## Basic use

```javascript
import UserNav from 'avantrip-react/quiero/UserNav';

export default () => (
  <UserNav
    qvUserData = { object }
    onLogout = { func }
  />
)
```

## Props

#### `qvUserData={<Object>}`
Objecto que contiene los datos de QV

#### `onLogout={<Func>}`
Manejador del evento click del link de logout
