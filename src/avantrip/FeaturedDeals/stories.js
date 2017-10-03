import React from 'react';
import FeaturedDeals from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';
import FeaturedDealsWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

const deals = [
  {
    "image":
      "https://static.avantrip.com/fkt-flight/images/Avantrip Carrousel Aereos 20171003 Miami y New York.jpg",
    "url": "https://www.avantrip.com/vuelos/destinos/miami-nuevayork",
  },
  {
    "image":
      "https://static.avantrip.com/fkt-flight/images/Avantrip Carrousel Autos 20171003 USA.jpg",
    "url": "https://www.avantrip.com/autos/",
  },
  {
    "image":
      "https://static.avantrip.com/fkt-flight/images/Avantrip Carrousel Paquetes 20171002 Punta Cana.jpg",
    "url": "https://www.avantrip.com/paquetes/957/punta-cana/10/2017/2",
  },
  {
    "image":
      "https://static.avantrip.com/fkt-flight/images/Avantrip Carrousel Hoteles 20171001 12 cuotas sin interes.jpg",
    "url": "https://www.avantrip.com/hoteles/",
  },
  {
    "image":
      "https://static.avantrip.com/fkt-flight/images/Avantrip Carrousel Aereos 20170928 G3 12 cuotas Master y Amex.jpg",
    "url": "",
  }
];


storiesOf('avantrip/FeaturedDeals', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FeaturedDeals deals={deals}/>
  ))

  .add('With data', () => (
    <FeaturedDealsWithData></FeaturedDealsWithData>
  ))
