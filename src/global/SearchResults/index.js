import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsListWithData from '../SearchResultsList/withData'
import FlightsFiltersWithData from  '../FlightsFilters/withData'
import FlightsComparisonTableWithData from  '../FlightsComparisonTable/withData'
import Paginate from '../Paginate/withData'
import { Container } from './styled';


const SearchResults = ({ showItemsByPage, filters, flightClusters, countItems, comparisonFlights }) =>  {

  const countPage = Math.ceil((countItems/showItemsByPage));
  //applyPaginate(getState())

  return (
    <Container>
      <div style={{display:"flex"}}>
        <div style={{flexGrow:"8"}}>
          <FlightsFiltersWithData options={filters} />
        </div>
        <div style={{flexGrow:"5"}}>
          <FlightsComparisonTableWithData flights={comparisonFlights} />
          <SearchResultsListWithData flightClusters={flightClusters} />
          <Paginate  pageCount={countPage} />
        </div>
      </div>
    </Container>
  )
}

SearchResults.propTypes = {
  showItemsByPage: PropTypes.number,
  filters: PropTypes.arr,
  clusters: PropTypes.arr,
}

export default SearchResults;
