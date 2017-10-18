import React, { Component } from 'react';
import Home from '../Home/withData';
import MainLayout from '../MainLayout/withData';
import withData from '../utils/withData';

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
