import React from 'react';
import Home from '../src/avantrip/Home/withData';
import MainLayout from '../src/avantrip/MainLayout/withData';
import withData from '../src/avantrip/utils/withData';

export default withData(() => (
  <MainLayout>
    <Home></Home>
  </MainLayout>
))
