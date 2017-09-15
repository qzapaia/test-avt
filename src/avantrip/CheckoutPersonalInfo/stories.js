import React from 'react';
import CheckoutPersonalInfo from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import { defaultsDeep } from 'lodash';

const enhace = withState('personalInfo','changeValue',{});
const CheckoutPersonalInfoWithState =  enhace((props) => {
  const { personalInfo, changeValue } = props;

  const changeHandler = (info) => {
    defaultsDeep(info, personalInfo);
    action('Change Value')(JSON.stringify(info));
    changeValue(info);
  }

  return (
    <CheckoutPersonalInfo {...props}
      firstname={personalInfo.firstname}
      lastname={personalInfo.lastname}
      docType={personalInfo.docType}
      docNumber={personalInfo.docNumber}
      birthday={personalInfo.birthday}
      gender={personalInfo.gender}
      onChange={changeHandler} />
  )
})

storiesOf('avantrip/CheckoutPersonalInfo', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <CheckoutPersonalInfoWithState></CheckoutPersonalInfoWithState>
  ))
