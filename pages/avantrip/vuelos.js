import React, { Component } from 'react';
import dynamic from 'next/dynamic'

import MainLayout from '../../src/avantrip/MainLayout/withData';
import withData from '../../src/avantrip/utils/withData';
const SearchResults = dynamic(import('../../src/avantrip/SearchResults/withData'), {
  ssr: false
})

const searchOneWay = {
  origin: 'BUE',
  destination: 'COR',
  departureDate: '11-03-2018',
  passengers: {
    adults: 1,
    children: 0,
    infants:0
  },
  cabinClass: 'Economy',
  channel: 'DESKTOP',
  portal:'AVANTRIP',
  leg:"oneway",
}

class HomePage extends Component{
  static getInitialProps(ctx) {
    return {
      pathname:ctx.asPath
    }
  }
  render(){
    const pathname = this.props;

    return (
      <MainLayout>
        <SearchResults
          pathname={pathname}
          origin={searchOneWay.origin}
          destination={searchOneWay.destination}
          departureDate={searchOneWay.departureDate}
          passengersAdults={searchOneWay.passengers.adults}
          passengersChildren= {searchOneWay.passengers.children}
          passengersInfants={searchOneWay.passengers.infants}
          cabinClass={searchOneWay.cabinClass}
          channel={searchOneWay.channel}
          portal={searchOneWay.portal}
          leg={searchOneWay.leg}
          showItemsByPage={50}
        />
      </MainLayout>
    )
  }
}

export default withData(HomePage)
