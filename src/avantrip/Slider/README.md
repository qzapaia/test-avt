### Description
Componente que muestra sus children como un carrusel.

### Basic use

```javascript
import Slider from 'avantrip-react/avantrip/Slider';

export default () => (
    <Slider settings={object}>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
    </Slider>
)
```

#### `settings={<Object>}`
Configuración que se pasará para cada componente del Slider.
Los valores posibles de configuración son:
```javascript
{
  'autoplay': false,
  'dots': true,
  'infinite': true,
  'slidesToShow': 1,
  'slidesToScroll': 1,
  'speed': 100,
  'dotsClass': 'dotsClass',
  'nextArrow': <SampleArrow> next </SampleArrow>,
  'prevArrow': <SampleArrow > prev </SampleArrow>,
  'className': 'className'
}
