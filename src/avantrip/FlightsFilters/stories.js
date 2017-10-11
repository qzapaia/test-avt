import React from 'react';
import FlightsFilters from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';
import FlightsFiltersWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

import reducer from "./reducer";

const filter = {
  scales:{
    0: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    },
    1: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    }
  },
  airlines:[
    {
      value:'1',
      label: 'una escala'
    },
    {
      value:'2',
      label: 'dos escala'
    }
  ],
  schedules:{
    0: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    },
    1: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    }
  },
  airports:{
    0: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    },
    1: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    }
  }
}

storiesOf('avantrip/FlightsFilters', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      flightsFilters: reducer,
    },
  }))
  .add('Default', () => (
    <FlightsFiltersWithData options={filter} />
  ))

  .add('With data', () => (
    <FlightsFiltersWithData options={filter}/>
  ))
