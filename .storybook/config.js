import { configure } from '@storybook/react';
import customStorybookCSS from './storybook.css';
import { setOptions } from '@storybook/addon-options';
import { injectGlobal } from 'styled-components';

injectGlobal`${customStorybookCSS}`

const ui = process.ui || 'all';

setOptions({
  // hierarchySeparator: null,
  sidebarAnimations: false,
});

const reqs = {
  quiero:require.context('../src/quiero', true, /stories\.js$/),
  avantrip:require.context('../src/avantrip', true, /stories\.js$/),
  global:require.context('../src/global', true, /stories\.js$/),
  all:require.context('../src/', true, /stories\.js$/),
}

const req = reqs[ui];

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
