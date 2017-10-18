import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsListWithData from '../SearchResultsList/withData'
import FlightsFiltersWithData from  '../FlightsFilters/withData'
import FlightsComparisonTableWithData from  '../FlightsComparisonTable/withData'
import Paginate from '../Paginate/withData'
import Tabs, { Tab } from "../Tabs";
import PriceTrendCalendar from "../PriceTrendCalendar/withData";
import Text from "../Text";

import { Container } from './styled';

import { withState } from 'recompose';

const enhace = withState('selectedtab', 'setTab', "tab1");

const TabsWithState = enhace(Tabs);

const calendarTitle = <div>
  <div><Text>¡Nuevo!</Text></div>
  <div><Text>Tendencia de tarifas</Text></div>
</div>;

const SearchResults = ({
  showItemsByPage,
  filters,
  flightClusters,
  countItems,
  comparisonFlights
}) =>  {

  const countPage = Math.ceil((countItems/showItemsByPage));
  //applyPaginate(getState())

  return (
    <Container>
      <div style={{display:"flex"}}>
        <div style={{flexGrow:"8"}}>
          <FlightsFiltersWithData options={filters} />
        </div>
        <div style={{flexGrow:"5"}}>
          <Tabs>
            <Tab id="tab1" title="Precio más Bajo">
              <FlightsComparisonTableWithData flights={comparisonFlights} />
            </Tab>
            <Tab id="tab2" title={calendarTitle}>
              Agregar calendario de tendencia de precios.
            </Tab>
          </Tabs>
          <SearchResultsListWithData flightClusters={flightClusters} />
          <Paginate  pageCount={countPage} />
        </div>
      </div>
    </Container>
  )
}

SearchResults.propTypes = {
  showItemsByPage: PropTypes.number,
  filters: PropTypes.object,
  clusters: PropTypes.object,
}

export default SearchResults;
