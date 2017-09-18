import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import readme from './README.md';
import { withState } from 'recompose';

import Tabs from './';
import Tab from './Tab';

let enhance = withState('selectedtab', 'setTab', "tab1");

const TabWithStoreAndFirstChildrenSelected = enhance(({ selectedtab, setTab }) =>
    <Tabs onChange={setTab} selectedTab={selectedtab}>
      <Tab id="tab1" title="title1">content 1</Tab>
      <Tab id="tab2" title="title2">content 2</Tab>
      <Tab id="tab3" title="title3">content 3</Tab>
    </Tabs>
);

storiesOf('avantrip/Tabs', module)
   .add('Default', () => <TabWithStoreAndFirstChildrenSelected />)
