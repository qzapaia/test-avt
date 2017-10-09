## Description
Permite visualizar ofertas destacadas utilizando un slider.

## Basic use

```javascript
import FeaturedDeals from 'avantrip-react/global/FeaturedDeals';

export default () => (
  <FeaturedDeals
    deals={Collection}
  />
)
```


## Props

#### `deals={<Collection>}`
Colleccion de ofertas. Debe respetar el siguiente formato:
``` javascript
[{
  "image": "https://static.avantrip.com/fkt-flight/images/Avantrip.jpg",
  "url": "https://www.avantrip.com/hoteles/",
}...];
```

## Basic use WithData

```javascript
<FeaturedDealsWithData></FeaturedDealsWithData>
```
