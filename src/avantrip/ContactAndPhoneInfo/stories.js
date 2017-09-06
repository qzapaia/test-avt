import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'
import { withState, compose } from 'recompose';

import ContactAndPhoneInfo from './'



import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);


// el enhace aplica todos los HOC de recompose ,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
const enhace = withState('phoneText','increment', '0810-222-2826');

const ContactAndPhoneInfoWithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { phoneText } = props;

  return (
    <ContactAndPhoneInfo phoneText={phoneText} >
    </ContactAndPhoneInfo>
  )
})

storiesOf('avantrip/ContactAndPhoneInfo', module)
  .add('Default', addReadme(() => (
    <ContactAndPhoneInfoWithState></ContactAndPhoneInfoWithState>
  )))
