import React from 'react';
import PropTypes from 'prop-types';
import FareDetail from '../FareDetail'
import FlightClusterRoute from './FlightClusterRoute'
import FlightClusterRouteOption from './FlightClusterRouteOption'
import JustOne from '../JustOne'
import {FareDetailContainer} from './styled'

import { map } from 'lodash'

const containerStyle = {
  backgroundColor:'white',
  minWidth:'200px',
  minHeight:'200px',
  display:'flex'
}

const routeContainer = {
  flexGrow:3
}

const OptionsSelector = JustOne(({select, selected, options, selectedOption})=>{
  return(<div>
    {
      map(options, (o, key) => (
          <FlightClusterRouteOption
            data={o}
            onClick={ select(o.summaryInfo.id) }
            selected={ selectedOption == o.summaryInfo.id ? true : false }
          />
      ))
    }
  </div>)
})

const FlightCluster = ({
  onCheckout,
  selectRouteOptions,
  onSelectedRouteOption,
  data,
}) => {

  return (
    <div style={containerStyle}>
      <div style={routeContainer}>
        <div style={{'padding':'10px','color':'green'}}>
          {data.additionalInfo}
        </div>


          {data.routes.first &&
            <div>
              <FlightClusterRoute
                title={data.routes.first.header.title}
                date={data.routes.first.header.date}
                departureCity={data.routes.first.header.departureCity}
                arrivalCity={data.routes.first.header.arrivalCity}
              >
                <OptionsSelector
                  selectedOption={selectRouteOptions.firstRouteOptionId}
                  onChange={ selectedOption => onSelectedRouteOption(
                    { 'firstRouteOptionId':selectedOption }
                  )}
                  options={data.routes.first.options}
                  />
              </FlightClusterRoute>
            </div>
          }

          {data.routes.second &&
            <div>
              <FlightClusterRoute
                title={data.routes.second.header.title}
                date={data.routes.second.header.date}
                departureCity={data.routes.second.header.departureCity}
                arrivalCity={data.routes.second.header.arrivalCity}
              >
                <OptionsSelector
                  selectedOption={selectRouteOptions.secondRouteOptionId}
                  onChange={ selectedOption => onSelectedRouteOption(
                    { 'secondRouteOptionId':selectedOption }
                  )}
                  options={data.routes.second.options}
                  />
              </FlightClusterRoute>
            </div>
          }

          {data.routes.third &&
            <div>
              <FlightClusterRoute
                title={data.routes.third.header.title}
                date={data.routes.third.header.date}
                departureCity={data.routes.third.header.departureCity}
                arrivalCity={data.routes.third.header.arrivalCity}
              >
                <OptionsSelector
                  selectedOption={selectRouteOptions.thirdRouteOptionId}
                  onChange={ selectedOption => onSelectedRouteOption(
                    { 'thirdRouteOptionId':selectedOption }
                  )}
                  options={data.routes.third.options}
                  />
              </FlightClusterRoute>
            </div>
          }

        <div style={{'padding':'10px','color':'blue'}}>
          {data.disclaimerText}
        </div>
      </div>


      <FareDetailContainer>
        <FareDetail currency="ARS" detailInfo={data.fareDetail}></FareDetail>
      </FareDetailContainer>
    </div>
  )
}


FlightCluster.propTypes = {

}

FlightCluster.defaultProps = {

}

export default FlightCluster;
