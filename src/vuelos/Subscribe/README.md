### Description
Componente para usos sarlanga.

### Basic use

```javascript
import Subscribe from 'avantrip-react/vuelos/Subscribe';

export default () => (
  <Subscribe
  onEvent={function}
  message={string}
  isActive={boolean}
  />
)
```


### Props

#### `onEvent={<Boolean> || <Function>}`
Event handler

#### `message={<String> || <Function>}`
Message to receive and show. String or function allowed


#### `isActive={<Boolean>}`
Enable an action within the component
