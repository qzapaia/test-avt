import React from 'react';
import InputBirthday from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import moment from 'moment';

const enhace = withState('birthday','setBirthday',{});
const enhaceWithCustomBirthday = withState('birthday','setBirthday',{day:17, month:9, year:1985});

const limitDates = {
  'adult':{
    max: moment().subtract(11, 'years').valueOf(),
    min: moment().subtract(102, 'years').valueOf()
  },
  'child':{
    max: moment().subtract(2, 'years').valueOf(),
    min: moment().subtract(11, 'years').valueOf()
  },
  'baby':{
    max: moment().valueOf(),
    min: moment().subtract(2, 'years').valueOf()
  }
}

/*
```
adult: > 12 años  y < a 102 años
child: > 2 años  y < a 12 años
baby : > fecha actual y < a 2 años
```
*/

const Component = (props) => {
  const { birthday, setBirthday } = props;

  const clickHandler = (birthdayParam) => {
    let birthdaytemp = Object.assign(birthday, birthdayParam);
    action('selected date')(birthdaytemp);
    setBirthday(birthdaytemp);
  }

  return (
    <InputBirthday {...props}
      value={birthday}
      onChange={clickHandler} />
    )
  }

const InputBirthdayWithState =  enhace(Component);
const InputBirthdayWithStateAndCustomBirthday =  enhaceWithCustomBirthday(Component);

storiesOf('global/InputBirthday', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <InputBirthdayWithState />
  ))
  .add('Con el label Fecha de Nacimiento', () => (
    <InputBirthdayWithState label="Fecha de Nacimiento" />
  ))
  .add('Con una fecha de nacimiento inicial', () => (
    <InputBirthdayWithStateAndCustomBirthday />
  ))
  .add('Con una fecha de nacimiento restringida para un adulto', () => (
    <InputBirthdayWithState
      max={limitDates.adult.max}
      min={limitDates.adult.min} />
  ))
  .add('Con una fecha de nacimiento restringida para un niño', () => (
    <InputBirthdayWithState
      max={limitDates.child.max}
      min={limitDates.child.min} />
  ))
  .add('Con una fecha de nacimiento restringida para un bebe', () => (
    <InputBirthdayWithState
      max={limitDates.baby.max}
      min={limitDates.baby.min} />
  ))
