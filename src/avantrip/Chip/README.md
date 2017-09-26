## Description
Componente que representa los filtros seleccionados en el resultado de búsqueda

## Basic use

```javascript
import Chip from 'avantrip-react/avantrip/Chip';

export default () => (
  <Chip
    onClose={function}
    label={string}
    isDeletable={boolean}
  />
)
```

## Props

#### `onClose={<Boolean>}`
Handler del ícono de cerrar el chip

#### `label={<String>}`
Texto del chip

#### `isDeletable={<Boolean>}`
Muestra el ícono de cerrar el chip


## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/Chip/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import chipReducer from 'avantrip-react/avantrip/Chip/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  chip:chipReducer,
  todos
})

const store = createStore(reducer);
// ...
```
