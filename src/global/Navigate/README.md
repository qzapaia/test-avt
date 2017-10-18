## Description
Componente para navegar entre páginas (hechas en React);

## Basic use

```javascript
import Navigate from 'avantrip-react/global/Navigate';

export default () => (
  <Navigate prefetch href="/">
    <a>Home</a>
  </Navigate>
)
```


## Props

#### `prefetch={<Boolean>}`
Prefetch next page

#### `href={<String>}`
URL
