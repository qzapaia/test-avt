import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import SearchResultWithFilters from './SearchResultWithFilters'
import SearchResultWithFiltersWithData from './SearchResultWithFiltersWithData'
import { Provider as ApolloClientProvider } from './apollo-client'

class StateComponent extends Component{
  constructor(props){
    super(props);
    this.state = {}
    this.filterHasChanged = this.filterHasChanged.bind(this);
  }
  filterHasChanged(filterGroup,filterName,value){
    this.setState({
      filters:{
        [filterGroup]:{
          [filterName]:value
        }
      }
    })
  }
  render(){
    console.log(this.state.filters);
    return <SearchResultWithFiltersWithData onFilterUpdated={this.filterHasChanged}
                                     filter={this.state.filters}>
      SearchResultWithFiltersWithData component
    </SearchResultWithFiltersWithData>
  }
}

storiesOf('vuelos/SearchResultWithFilters', module)
  .add('Default', () => (
    <SearchResultWithFilters>SearchResultWithFilters component</SearchResultWithFilters>
  ))
  .add('With data', () => (
    <ApolloClientProvider>
      <StateComponent></StateComponent>
    </ApolloClientProvider>
  ))
