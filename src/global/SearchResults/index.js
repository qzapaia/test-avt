import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsListWithData from '../SearchResultsList/withData'
import FlightsFiltersWithData from  '../FlightsFilters/withData';
import Paginate from '../Paginate/withData'
import { get } from 'lodash';
import { Container } from './styled';


const SearchResults = ({ showItemsByPage, filters, clusters }) =>  {

  const countPage = Number.parseInt((clusters.length/showItemsByPage));
  
  return (
    <Container>
      <Paginate  pageCount={countPage} />
      <FlightsFiltersWithData options={filters} />
    </Container>
  )
}

SearchResults.propTypes = {
  showItemsByPage: PropTypes.number,
  filters: PropTypes.arr,
  clusters: PropTypes.arr,
}

export default SearchResults;
