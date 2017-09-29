import React from 'react';
import CheckoutPersonalInfo from './';

import moment from 'moment';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import { defaultsDeep } from 'lodash';

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

const enhace = withState('personalInfo','changeValue',{});
const enhaceWithData = withState('personalInfo','changeValue',{"docType":"passport","residencePlace":"BR", "birthday":{"year":"1985","month":"9","day":"17"},"docNumber":31824514,"lastname":"Garcia","firstname":"Alejandro","gender":"M"});

const comp = (props) => {
  const { personalInfo, changeValue } = props;

  const changeHandler = (info) => {
    defaultsDeep(info, personalInfo);
    action('Change Value')(JSON.stringify(info));
    changeValue(info);
  }

  return (
    <CheckoutPersonalInfo {...props}
      traveller={personalInfo}
      onChange={changeHandler} />
  )
}

const CheckoutPersonalInfoWithState =  enhace(comp);
const CheckoutPersonalInfoWithData =  enhaceWithData(comp);

storiesOf('global/CheckoutPersonalInfo', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <CheckoutPersonalInfoWithState />
  ))
  .add('Con los datos completos', () => (
    <CheckoutPersonalInfoWithData />
  ))
  .add('Con limite de edad', () => (
    <CheckoutPersonalInfoWithState
      minBirthdate={limitDates.adult.min}
      maxBirthdate={limitDates.adult.max} />
  ))
