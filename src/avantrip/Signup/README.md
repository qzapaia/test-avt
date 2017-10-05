## Description
Componente ubicado en el Header. Se encarga del registro de un usuario.

## Basic use

```javascript
import Signup from 'avantrip-react/avantrip/Signup';

export default () => (
  <Signup
    onFacebookSignup={function}
  />
)
```

## Props

#### `onFacebookSignup={<Function>}`
Handler para el botón de login con Facebook. Devuelve un objeto con la forma:
```javascript
{
  facebook: {
    email: {string},
    id: {string},
    name: {string},
    accessToken: {string}
  }
}
```


## Redux
Utiliza el reducer y action del componente global/User.
