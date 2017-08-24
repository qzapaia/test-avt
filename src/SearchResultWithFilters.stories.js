import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import SearchResultWithFilters from './SearchResultWithFilters'
import SearchResultWithFiltersWithData from './SearchResultWithFiltersWithData'
import { Provider as ApolloClientProvider } from './apollo-client'
import { action } from '@storybook/addon-actions';



class StatefulComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      filters:{
        escalas:{
          ida:1
        }
      }
    }
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
    action('filter')(this.state.filters)
    return <SearchResultWithFiltersWithData onFilterUpdated={this.filterHasChanged}
                                            filter={this.state.filters}>
      SearchResultWithFiltersWithData component
    </SearchResultWithFiltersWithData>
  }
}

storiesOf('SearchResultWithFilters', module)
  .add('Default', () => (
    <SearchResultWithFilters>SearchResultWithFilters component</SearchResultWithFilters>
  ))
  .add('With data', () => (
    <ApolloClientProvider>
      <StatefulComponent></StatefulComponent>
    </ApolloClientProvider>
  ))
