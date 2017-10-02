import React from 'react';

import FlightSearchBoxWithState from "./withData";

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';
import reducer from "../../global/FlightSearchBox/reducer";

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import FlightSearchBoxWithData from './withData';

storiesOf('avantrip/FlightSearchBox', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer: {
      search: reducer
    }
  }))
  .add('Default', () => (
     <FlightSearchBoxWithData
      title='busca tu vuelo'
    />
  ))
