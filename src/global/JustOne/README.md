## Description
Componente para usos sarlanga.

## Basic use

```javascript
import JustOne from 'avantrip-react/global/JustOne';

const Group = JustOne(({select, isSelected})=>(
  <section>
    <h4>Click para elegir</h4>
    <div onClick={select(1)}>
      Opción 1 {isSelected(1)?'seleccionado' : 'no seleccionado'}
    </div>
    <div onClick={select(2)}>
      Opción 2 {isSelected(2)?'seleccionado' : 'no seleccionado'}
    </div>
    <div onClick={select(3)}>
      Opción 3 {isSelected(3)?'seleccionado' : 'no seleccionado'}
    </div>
  </section>
))

export default () => (
  <Group defaultValue="3" onChange={(sel)=>console.log(sel)} />
)
```


## Props inyectadas por HOC

#### `isSelected={<Function>}`
Check if value is selected

#### `select={<Function>}`
Change selected value

#### `selected={<Number> || <String>}`
Valor elegido


## Props que recibe el componente generado

#### `onChange={<Function>}`
Value change listener

#### `defaultValue={<Number> || <String>}`
Valor por defecto si no hay nada elegido
