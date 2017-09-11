import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'
import TextContent from './'

import { withState, compose } from 'recompose';



import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);


// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
const enhace = withState('counter','increment',0);
const TextContentWithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { title, subtitle } = props;

  return (
    <TextContent title={title} subtitle={subtitle} />
  )
})

storiesOf('avantrip/TextContent', module)
  .add('Default', addReadme(() => (
    <TextContentWithState 
      title="Avantrip.com: Agencia de turismo y viajes" 
      subtitle="Somos una agencia de viajes con años de experiencia en la industria turística. En Avantrip.com podés elegir entre cientos de vuelos a destinos de todo el mundo, encontrar tu hotel ideal, seleccionar paquetes turísticos a medida..." />
  )))



