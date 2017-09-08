### Description
Componente que muestra sus children como un carrusel.

### Basic use

```javascript
import Slider from 'avantrip-react/avantrip/Slider';

export default () => (
    <Slider>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
    </Slider>
)
```
```javascript

//Pluing utilizado https://github.com/akiran/react-slick
import SliderCarousel from 'react-slick';

<SliderCarousel {...settings}>
  {children}
</SliderCarousel>
```
