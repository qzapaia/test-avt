### Description
Componente para usos sarlanga.

### Basic use

```javascript
import BestSeller from 'avantrip-react/global/BestSeller';

export default () => (
  <BestSeller
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
