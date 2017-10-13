# Setup
`yarn add avantrip-react`

## Example (Next.js)

```javascript
import { ThemeProvider } from 'styled-components';
import theme from 'avantrip-react/avantrip/styled.theme';
import Text from 'avantrip-react/avantrip/Text';
import Icon from 'avantrip-react/avantrip/Icon';
import Colors from 'avantrip-react/avantrip/Colors';

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <Colors color="brand"></Colors>
      <Text type="xl">Hola</Text>
      <Icon id="Add"></Icon>
    </div>
  </ThemeProvider>
)
```

# Dev Setup
Fork and clone `https://repo.avantrip.com/cross/avantrip-react`

## Install dependencies
`yarn`

## Run
`yarn run dev [ui]`

Optional parameter **ui** set the group of ui components to load.

Example: Load only **quiero** components.

`yarn run dev quiero`

## Generate or remove components
`yarn run gen`

## Run Next (local)
`yarn run devnext`

## Preview de master en int
http://avantrip-react.api.int.devtrip.com.ar/storybook

## Style Guide (JS & React)
https://github.com/airbnb/javascript/tree/master/react

## Styled Components
https://www.styled-components.com/

## Recompose
https://github.com/acdlite/recompose


## Uso de lodash básico
```javascript
import { get, map } from 'lodash';
```

## Escuchar acciones de redux para ejecutar cosas (analytics)
```javascript
// ... imports
import { actionsByAction } from 'avantrip-react/redux.middlewares';

// Escucha cuando se lanza el action 'TEST_ACTION' y ejectua la función asociada
const actionsMiddleware = actionsByAction({
  TEST_ACTION(action){
    console.log('action', action);
  }
})

export default () => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, actionsMiddleware)
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

```

## Datos útiles

#### GraphQL integración
http://product.api.int.devtrip.com.ar/graphiql

#### GraphQL stage
http://product.api.stage.devtrip.com.ar/graphiql


## Schema
Nombres para usar en props, collections, variables, etc ...

[Ver](/SCHEMA.md)
