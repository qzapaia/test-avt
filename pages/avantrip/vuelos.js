import React, { Component } from 'react';
import dynamic from 'next/dynamic'

import MainLayout from '../../src/avantrip/MainLayout/withData';
import withData from '../../src/avantrip/utils/withData';
const SearchResults = dynamic(import('../../src/avantrip/SearchResults/withData'), {
  ssr: false
})

class HomePage extends Component{
  static getInitialProps(ctx) {
    return {
      pathname:ctx.asPath
    }
  }
  render(){
    const pathname = this.props;

    return (
      <MainLayout>
        <SearchResults pathname={pathname}></SearchResults>
      </MainLayout>
    )
  }
}

export default withData(HomePage)
