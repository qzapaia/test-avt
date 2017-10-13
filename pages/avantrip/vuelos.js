import React, { Component } from 'react';

class SearchPage extends Component{
  static getInitialProps(ctx) {
    return {
      pathname:ctx.asPath
    }
  }
  render(){
    return (
      <div>{this.props.pathname}</div>
    )
  }
}

export default SearchPage;
