import React from 'react';
import NumberGroup from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import { find } from 'lodash';


const initialOptions = [{
  label:'numero a',
  id:'a',
  value:1
},{
  label:'numero b',
  id:'b',
  value:2
}]

const enhace = withState('options','change',initialOptions);

const NumberGroupWithState =  enhace((props) => {
  const { options, change } = props;

  const clickHandler = (option) => {
    action('option changed')(option);
    find(options,{ id:option.id }).value = option.value;
    change(options)
  }
  const logKeyValue = option => {
    action('key value listener')(option);
  }

  return (
    <NumberGroup
      {...props}
      options={options}
      onChange={clickHandler}
      onChangeKeyValue={logKeyValue}
      label="Numeritos"
    />
  )
})

storiesOf('avantrip/NumberGroup', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <NumberGroupWithState></NumberGroupWithState>
  ))
