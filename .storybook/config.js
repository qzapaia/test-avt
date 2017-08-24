import { configure } from '@storybook/react';

const ui = process.ui || 'global';

const reqs = {
  quiero:require.context('../src/quiero', true, /stories\.js$/),
  global:require.context('../src/', true, /stories\.js$/),
}

const req = reqs[ui];

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
