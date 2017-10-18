import React, { Component } from 'react';
import Home from '../../src/avantrip/Home/withData';
import MainLayout from '../../src/avantrip/MainLayout/withData';
import withData from '../../src/avantrip/utils/withData';

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
        <Home pathname={pathname}></Home>
      </MainLayout>
    )
  }
}

export default withData(HomePage)
