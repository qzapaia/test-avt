import React, { Component } from 'react';
import dynamic from 'next/dynamic'
import qs from 'query-string';
import MainLayout from '../src/avantrip/MainLayout/withData';
import withData from '../src/avantrip/utils/withData';
const SearchResults = dynamic(import('../src/avantrip/SearchResults/withData'), {
  ssr: false
})

class HomePage extends Component{
  static getInitialProps(ctx) {
    const {
      asPath
    } = ctx;

    const queryString = qs.parse(asPath.split('?')[1],{
      arrayFormat:'index'
    })

    const {
      adults,
      babies,
      children,
      dateFrom,
      dateTo,
      destinationFromId,
      destinationToId,
      flightClass,
      isMulticity,
      round_trip,
    } = queryString;


    const searchArgs = {
      origin:destinationFromId,
      destination:destinationToId,
      departureDate:dateFrom,
      returningDate:dateTo,
      passengersAdults:Number.parseInt(adults) || 1,
      passengersChildren:Number.parseInt(children) || 0,
      passengersInfants:Number.parseInt(babies) || 0,
      cabinClass: flightClass == 'NMO.GBL.SCL.BSN' ? 'Business' : 'Economy',
      leg:(round_trip && 'roundtrip' || (isMulticity != 'false' && 'multitrip') || 'oneway'),
    }

    return {
      pathname:asPath,
      searchArgs
    }
  }
  render(){
    const {
      pathname,
      searchArgs
    } = this.props;
    
    return (
      <MainLayout>
        <SearchResults
          {...searchArgs}
          pathname={pathname}
        />
      </MainLayout>
    )
  }
}

export default withData(HomePage)
