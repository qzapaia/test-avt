### Description
Componente para usos sarlanga.

### Basic use

```javascript
import {{componentName}} from 'avantrip-react/{{ui}}/{{componentName}}';

export default () => (
  <{{componentName}}
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
