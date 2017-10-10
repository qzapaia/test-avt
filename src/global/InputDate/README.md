## Description
Input de fechas. Fecha única o rango de fechas.

## Basic use

```javascript
import InputDate from 'avantrip-react/avantrip/InputDate';

export default () => (
  <InputDate
    min="2018-01-01"
    max="2018-01-28"
    range={true}
  />
)
```


## Props
#### `onChange={<Function>}`
Escucha cambio en la fecha

#### `range={<Boolean>}>}`
Habilita la selección de rangos de fechas en vez de fecha única

#### `value={<Moment> || <{ startDate:Moment, endDate:Moment }>}`
Fecha o fechas seleccionadas


#### `label={<String>}`
Label del Input

#### `focused{<Boolean>}`
Abre el selector de fechas

#### `min={<Moment>}`
Fecha mínima

#### `max={<Moment>}`
Fecha máxima

#### `startDatePlaceholderText={<String}>`
Placeholder de fecha inicial. (Cuando es rango)

#### `endDatePlaceholderText={<String}>`
Placeholder de fecha de fin. (Cuando es rango)

#### `placeholder={<String}>`
Placeholder de input. (Cuando es fecha única)

#### `numberOfMonths={<Number>}`
Numero de meses que se muestran

#### `initialVisibleMonth={<Number>}`
Mes que se muestra inicialmente

#### `forceDatesFormat={<Boolean>}`
Fuerza el formato {startDate} en el single date picker.

#### `displayFormat={<String|Function>}`
Establece el formato de la fecha a mostrar (moment)
