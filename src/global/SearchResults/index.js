import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsListWithData from '../SearchResultsList/withData'
import FlightsFiltersWithData from  '../FlightsFilters/withData';
import Paginate from '../Paginate/withData'
import { get } from 'lodash';
import { Container } from './styled';

const SearchResults = ({ resultData , showItemsByPage, filters, clusters }) =>  {
 
  const countPage = Number.parseInt((clusters.length/showItemsByPage));

  return (
    <Container>
      <Paginate  pageCount={countPage} />
      <FlightsFiltersWithData options={filters} />
    </Container>
  )
}

SearchResults.propTypes = {
  //text: PropTypes.node.isRequired,
  //hoteles: PropTypes.arr,
  //getRepos: PropTypes.func,
  //repos: PropTypes.arr,
}

SearchResults.defaultProps = {
  //text:'no value yet :(',
  //hoteles:[],
  //getRepos(){},
  //repos:[],
}

export default SearchResults;
