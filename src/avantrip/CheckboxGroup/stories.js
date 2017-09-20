import React from 'react';
import CheckboxGroup from './';
import Text from '../Text/index';
import _ from 'lodash';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
let initialOptions = [{
  value: 1,
  label: "13hs a 17hs"
},
{
    value: 2,
    label: "8hs a 12hs"
}];

const enhace = withState('values','selectOption',[]);
const CheckboxGroupWithState =  enhace((props) => {
  const { selectOption, values } = props;

  const onChangeHandler = (changedObj) => {
    action('onChange')(changedObj);
    if(changedObj.checked){
      values.push(changedObj.value);
      selectOption(values);
    }else{
      selectOption(_.remove(values, currentValue =>
        currentValue != changedObj.value));
    }
  }

  const onClear = () => {
    action('onClear')();
    selectOption([]);
  }

  return (
    <CheckboxGroup {...props}
      options={initialOptions}
      onChange={onChangeHandler}
      onClear={onClear}
      label={props.children}
      values={values} />
  )
});

storiesOf('avantrip/CheckboxGroup', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <CheckboxGroupWithState />
  ))
  .add('With a Label', () => (
    <CheckboxGroupWithState>
      <Text type='m'>
        <label>Horarios</label>
      </Text>
    </CheckboxGroupWithState>
  ))
  .add('Con la opcion de Todas', () => (
    <CheckboxGroupWithState
      allOptions={{
        label:<span>Todas los horarios</span>,
        checked:false}}
    />
  ));
