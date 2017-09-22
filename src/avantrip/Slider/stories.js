import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'

import Slider from './'

import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

const SliderComponent = () => (
    <Slider>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
    </Slider>
)

storiesOf('avantrip/Slider', module)
  .add('Default', addReadme(() => (
    <SliderComponent></SliderComponent>
  )))
