## Description
Componente para usos sarlanga.

## Basic use

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


## Props

#### `onEvent={<Boolean> || <Function>}`
Event handler

#### `isActive={<Boolean>}`
Enable an action within the component

{{#redux}}

## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/{{ui}}/{{componentName}}/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import {{camelCase name}}Reducer from 'avantrip-react/{{ui}}/{{componentName}}/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  {{camelCase name}}:{{camelCase name}}Reducer,
  todos
})

const store = createStore(reducer);
// ...
```
{{/redux}}
