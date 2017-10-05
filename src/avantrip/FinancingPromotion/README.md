## Description
Muestra el banner de financiamiento de la home.

## Basic use

```javascript
import FinancingPromotion from 'avantrip-react/avantrip/FinancingPromotion';

export default () => (
  <FinancingPromotion
    data={object}
  />
)
```


## Props

#### `data={<object>}`
Información utilizada para armar la promoción. Debe tener la forma:
```javascript
  {
    image: "https://static.avantrip.com/fkt-flight/images/Avantrip Banner Financiacion 20170817.jpg"
  }
```

## Basic use WithData

```javascript
import FinancingPromotion from 'avantrip-react/avantrip/FinancingPromotion/withData';

export default () => (
  <FinancingPromotionWithData />
)
```
