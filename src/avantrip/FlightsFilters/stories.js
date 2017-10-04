import React from 'react';
import FlightsFilters from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import FlightsFiltersWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

import { remove, clone } from 'lodash';

const enhace = compose(
  withState('expanded','onExpand',{}),
  withState('values','onChange',{}),
)
const options = {
  ida:[
    {
      value:'1',
      label: "una escala"
    },
    {
      value:'2',
      label: "dos escala"
    }
  ],
  vuelta:[
    {
      value:'1',
      label: "una escala"
    },
    {
      value:'2',
      label: "dos escala"
    }
  ],
  airlines:[
    {
      value:'1',
      label: "una escala"
    },
    {
      value:'2',
      label: "dos escala"
    }
  ],
  salida:[
    {
      value:'1',
      label: "una escala"
    },
    {
      value:'2',
      label: "dos escala"
    }
  ]
}
const FlightsFiltersWithState =  enhace((props) => {
  const {
    expanded,
    onExpand,
    values,
    onChange
  } = props;

  const onExpandHandler = (change) => {
    onExpand({
      ...expanded,
      ...change,
    })
    action('expanded')(expanded);
  }

  const onChangeHandler = (id, {checked, value}) => {
    const newValues = clone(values);
    if(checked){
      newValues[id] = newValues[id] ? newValues[id].concat(value) : [value];
    }else{
      remove(newValues[id],v=>v==value)
    }
    action('onChange')(newValues);
    onChange(newValues)
  }
  const onClearHandler = id => {
    onChange({
      ...values,
      [id]:[]
    });
  }

  return (
    <FlightsFilters
      {...props}
      expanded={expanded}
      onExpand={onExpandHandler}

      options={options}

      values={values}
      onChange={onChangeHandler}
      onClear={onClearHandler}
    />
  )
})

storiesOf('avantrip/FlightsFilters', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      FlightsFilters: reducer,
    },
  }))
  .add('Default', () => (
    <FlightsFiltersWithState></FlightsFiltersWithState>

  ))

  .add('With data', () => (
    <FlightsFiltersWithData></FlightsFiltersWithData>
  ))
