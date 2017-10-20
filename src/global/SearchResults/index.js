import React from "react";
import PropTypes from "prop-types";

import SearchResultsListWithData from "../SearchResultsList/withData";
import FlightsFiltersWithData from "../FlightsFilters/withData";
import FlightsComparisonTableWithData from "../FlightsComparisonTable/withData";
import SearchResultsPlaceHolder from "../SearchResultsPlaceHolder";
import Paginate from "../Paginate/withData";
import Tabs, { Tab } from "../Tabs";
import PriceTrendCalendarWithData from "../PriceTrendCalendar/withData";
import Text from "../Text";
import CurrencySelectorWithData from "../CurrencySelector/withData";
import Select from "../Select";
import Breadcrumb from "../Breadcrumb";
import FlightSearchBox from "../FlightSearchBox/withData";
import Subscribe from "../Subscribe/TripSubscribe/withData";
import Link from "../Link";

import { Container } from "./styled";
import { indexOf, find, map, get, head, last } from "lodash";
import moment from "moment";

const onBuyHandler = next => value => {
  next(value);
};

const calendarTitle = (
  <div>
    <div>
      <Text>¡Nuevo!</Text>
    </div>
    <div>
      <Text>Tendencia de tarifas</Text>
    </div>
  </div>
);

//TODO eliminar cuando se aplique correctamente el CurrentSelector
const initialOptions = [
  {
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
  }
];

const SearchResults = ({
  showItemsByPage,
  filters,
  flightClusters,
  countItems,
  countFlights,
  comparisonFlights,
  loading,
  error,
  onBuy,
  currency,
  destination,
  origin,
  departureDate,
  returningDate,
  passengersAdults,
  passengersChildren,
  passengersInfants,
  leg
}) => {
  if (loading) {
    return <SearchResultsPlaceHolder />;
  } else if (error) {
  } else {
    const isNotMultitrip = leg != "multitrip";
    const countPage = Math.ceil(countItems / showItemsByPage);
    const pricesTrendCalendar = isNotMultitrip && {
      dest: destination[0],
      ori: origin[0],
      dateFrom: departureDate[0],
      dateTo: get(returningDate, "returningDate[0]", null),
      adults: passengersAdults,
      children: passengersChildren,
      babies: passengersInfants,
      minDepartureMonthYear: moment(departureDate[0]).format("YYYY-MM"),
      maxDepartureMonthYear: moment(departureDate[0])
        .add(1, "year")
        .format("YYYY-MM"),
      minDepartureDate: moment(departureDate[0])
        .add(2, "day")
        .format("YYYY-MM-DD"),
      maxDepartureDate: moment(departureDate[0])
        .add(1, "year")
        .format("YYYY-MM-DD")
    };

    return (
      <Container>
        <Breadcrumb>
          <Link href="https://www.avantrip.com">Avantrip.com</Link>
          <Link href="https://www.avantrip.com/vuelos">Vuelos</Link>
          <span>
            {`${countFlights} vuelos a ${head(destination).name} desde ${last(
              origin
            ).name}`}
          </span>
        </Breadcrumb>
        <div>
          <div>
            <FlightSearchBox title="Buscá tu vuelo" />
            <Subscribe
              value={{ city: head(destination).name }}
              title={`Te avisamos cuando tengamos los precios más bajos a [city].`}
            />
            <FlightsFiltersWithData options={filters} />
          </div>

          <div>
            <Tabs>
              <Tab id="tab1" title="Precio más Bajo">
                <FlightsComparisonTableWithData flights={comparisonFlights} />
              </Tab>
              {isNotMultitrip ? (
                <Tab id="tab2" title={calendarTitle}>
                  <PriceTrendCalendarWithData
                    origin={pricesTrendCalendar.ori}
                    destination={pricesTrendCalendar.dest}
                    dateTo={pricesTrendCalendar.dateTo}
                    dateFrom={pricesTrendCalendar.dateFrom}
                    adults={pricesTrendCalendar.adults}
                    children={pricesTrendCalendar.children}
                    babies={pricesTrendCalendar.babies}
                    minDepartureMonthYear={
                      pricesTrendCalendar.minDepartureMonthYear
                    }
                    maxDepartureMonthYear={
                      pricesTrendCalendar.maxDepartureMonthYear
                    }
                    minDepartureDate={pricesTrendCalendar.minDepartureDate}
                    maxDepartureDate={pricesTrendCalendar.maxDepartureDate}
                  />
                </Tab>
              ) : null}
            </Tabs>
            <div>
              <CurrencySelectorWithData options={initialOptions} />
              <div>
                <span>Ordenar por</span>
                <Select
                  value="one"
                  options={[
                    { value: "one", label: "Menor Precio" },
                    { value: "two", label: "Mayor Precio" },
                    { value: "three", label: "Menos Escalas" },
                    { value: "four", label: "Más Escalas" }
                  ]}
                />
              </div>
            </div>
            <SearchResultsListWithData
              flightClusters={flightClusters}
              onBuy={onBuy}
            />
            <Paginate pageCount={countPage} />
          </div>
        </div>
      </Container>
    );
  }
};

SearchResults.propTypes = {
  showItemsByPage: PropTypes.number,
  filters: PropTypes.object,
  flightClusters: PropTypes.object,
  onBuy: PropTypes.func,
  countItems: PropTypes.number,
  countFlights: PropTypes.number,
  comparisonFlights: PropTypes.array,
  origin: PropTypes.array,
  destination: PropTypes.array,
  leg: PropTypes.string
};

SearchResults.defaultProps = {
  
}

export default SearchResults;
