import React from 'react';
import InputBirthday from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('birthday','setBirthday',{});
const enhaceWithCustomBirthday = withState('birthday','setBirthday',{day:17, month:9, year:1985});

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

storiesOf('avantrip/InputBirthday', module)
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
