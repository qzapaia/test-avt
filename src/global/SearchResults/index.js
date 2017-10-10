import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsListWithData from '../SearchResultsList/withData'
import FlightsFiltersWithData from  '../FlightsFilters/withData';
import PaginateWithData from '../Paginate/withData'

let search = {
  origin: 'BUE',
  destination: 'COR',
  departureDate: '11-03-2018',
  returningDate: '20-03-2018',
  passengers: {
    adults: 1,
    children: 0,
    infants:0
  },
  cabinClass: 'Economy',
  channel: 'DESKTOP',
  portal:'AVANTRIP'
}

const SearchResults = ({
  text,
  onClick,
  repos,
  getRepos,
  hoteles,
}) => (
  <div >
    
    <div>

      <FlightsFiltersWithData 
        origin={search.origin}
        destination={search.destination}
        departureDate={search.departureDate}
        returningDate={search.returningDate}
        passengersAdults={search.passengers.adults}
        passengersChildren= {search.passengers.children}
        passengersInfants={search.passengers.infants}
        cabinClass={search.cabinClass}
        channel={search.channel}
        portal={search.portal}/>

    </div>  
    
    <div>
      <SearchResultsListWithData 
        origin={search.origin}
        destination={search.destination}
        departureDate={search.departureDate}
        returningDate={search.returningDate}
        passengersAdults={search.passengers.adults}
        passengersChildren= {search.passengers.children}
        passengersInfants={search.passengers.infants}
        cabinClass={search.cabinClass}
        channel={search.channel}
        portal={search.portal}/>

    </div>  
    <h2>Paginacion</h2>
    <PaginateWithData
      origin={search.origin}
      destination={search.destination}
      departureDate={search.departureDate}
      returningDate={search.returningDate}
      passengersAdults={search.passengers.adults}
      passengersChildren= {search.passengers.children}
      passengersInfants={search.passengers.infants}
      cabinClass={search.cabinClass}
      channel={search.channel}
      portal={search.portal}
      showItemsByPage={10}
       />
  </div>
)

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
