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

    const queryString = qs.parse(asPath,{
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
      passengersAdults:Number.parseInt(adults) || 0,
      passengersChildren:Number.parseInt(children) || 0,
      passengersInfants:Number.parseInt(babies) || 0,
      cabinClass:flightClass,
      leg:(round_trip && '1' || isMulticity && '3' || '2'),
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
    console.log(searchArgs);
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
