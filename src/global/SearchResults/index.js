import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsListWithData from '../SearchResultsList/withData'
import FlightsFiltersWithData from  '../FlightsFilters/withData'
import FlightsComparisonTableWithData from  '../FlightsComparisonTable/withData'
import Paginate from '../Paginate/withData'
import Tabs, { Tab } from "../Tabs";
import PriceTrendCalendar from "../PriceTrendCalendar/withData";
import Text from "../Text";
import CurrencySelector from "../CurrencySelector";
import Select from "../Select";
import Breadcrumb from "../Breadcrumb";
import FlightSearchBox from "../FlightSearchBox/withData";
import Subscribe from "../Subscribe/TripSubscribe/withData";
import Link from "../Link";

import { Container } from './styled';
import {
  indexOf,
  find,
  map,
  get,
  head,
  last
} from 'lodash';

const onBuyHandler = next => value => {
  next(value);
}

const calendarTitle = <div>
  <div><Text>¡Nuevo!</Text></div>
  <div><Text>Tendencia de tarifas</Text></div>
</div>;

//TODO eliminar cuando se aplique correctamente el CurrentSelector
const initialOptions = [{
  value: 1,
  label: "ARS"
},
{
  value: 2,
  label: "USD"
},
{
  value: 3,
  label: "REAL"
}];

const SearchResults = ({
  showItemsByPage,
  filters,
  flightClusters,
  countItems,
  countFlights,
  comparisonFlights,
  onBuy,
  origin,
  destination,
  leg
}) =>  {
  const countPage = Math.ceil((countItems/showItemsByPage));
  const isNotMultitrip = leg != "multitrip";
  //applyPaginate(getState())
  return (
    <Container>
      <Breadcrumb>
        <Link href="https://www.avantrip.com">Avantrip.com</Link>
        <Link href="https://www.avantrip.com/vuelos">Vuelos</Link>
        <span>
          {`${countFlights} vuelos a ${head(destination).name} desde ${last(origin).name}`}
        </span>
      </Breadcrumb>
      <div style={{display:"flex"}}>
        <div >
          <FlightSearchBox
            title='Buscá tu vuelo'
          />
          <Subscribe
            value={{ city: head(destination).name }}
            title={`Te avisamos cuando tengamos los precios
              más bajos a [city].`}/>
          <FlightsFiltersWithData options={filters} />
        </div>
        <div >
          <Tabs>
            {isNotMultitrip &&
              <Tab id="tab1" title="Precio más Bajo">
                <FlightsComparisonTableWithData flights={comparisonFlights} />
              </Tab>
            }
            <Tab id="tab2" title={calendarTitle}>
              Agregar calendario de tendencia de precios.
            </Tab>
          </Tabs>
          <div>
            <CurrencySelector
              options={initialOptions}
            />
            <div>
              <span>Ordenar por</span>
              <Select
                value='one'
                options={[
                  {value: 'one', label: 'Menor Precio'},
                  {value: 'two', label: 'Mayor Precio'},
                  {value: 'three', label: 'Menos Escalas'},
                  {value: 'four', label: 'Más Escalas'}
                ]} />
            </div>
          </div>
          <SearchResultsListWithData flightClusters={flightClusters} onBuy={onBuy} />
          <Paginate  pageCount={countPage} />
        </div>
      </div>
    </Container>
  )
}

SearchResults.propTypes = {
  showItemsByPage: PropTypes.number,
  filters: PropTypes.object,
  flightClusters: PropTypes.object,
  onBuy: PropTypes.func,
  countItems: PropTypes.number,
  countFlights: PropTypes.number,
  comparisonFlights: PropTypes.array,
  origin: PropTypes.object,
  destination: PropTypes.object
}

export default SearchResults;
