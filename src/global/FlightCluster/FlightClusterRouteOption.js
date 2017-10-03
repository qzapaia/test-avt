import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../Text';
import InputRadio from '../InputRadio';

import { map } from 'lodash'

const formatMinutes = minutes => moment()
                                .startOf('day')
                                .add(minutes, 'minutes')
                                .format('hh[hs] mm[m] ')

const FlightClusterRouteOption = ({data, onClick}) => {
  
  return (
    <div>
      <div style={{display:'flex', 'height':'70', 'alignItems':'center', 'flexGrow':1}} onClick={onClick}>
        <InputRadio></InputRadio>

        <div style={{display:'flex','alignItems':'center', 'justifyContent':'space-around', 'flexGrow':10}}>

          <div>
            {
              map(data.summaryInfo.airlineLogos, a => (
                <img src={a} />
              ))
            }
          </div>

          <div>
            {data.summaryInfo.provider}
          </div>
          <div>
            <div>
              {data.summaryInfo.departureIata}
            </div>
            <div>
              {data.summaryInfo.departureDate.getTime()}
            </div>
          </div>

          <div>
            {data.summaryInfo.scalesText}
          </div>

          <div>
            <div>
              {data.summaryInfo.arrivalIata}
            </div>
            <div>
              {data.summaryInfo.arrivalDate.getTime()}
            </div>
          </div>

          <div>
            <div>
              {data.summaryInfo.totalTime.getTime()}
            </div>
            <div>
              Detalle
            </div>
          </div>

        </div>

      </div>

      <div>
        <div style={{backgroundColor:'lightgrey', 'height':'35', display:'flex','alignItems':'center'}}>
          <div>
            {data.extendedInfo.header}
          </div>
        </div>
        {
          map(data.extendedInfo.flights, f => (
            <div style={{display:'flex','justifyContent':'center'}}>
              <div style={{margin:'10px'}}>
                <div style={{textAlign:'right'}}>
                  SALIDA
                </div>
                <div style={{textAlign:'right'}}>
                  {f.departure.date.toString()}
                </div>
                <div style={{textAlign:'right'}}>
                  {f.departure.iata}
                </div>
                <div style={{textAlign:'right'}}>
                  {f.departure.date.getTime()}
                </div>
                <div style={{textAlign:'right'}}>
                  {f.departure.city}
                </div>
                <div style={{textAlign:'right'}}>
                  {f.departure.airport}
                </div>
              </div>

              <div style={{margin:'10px'}}>
                <div style={{padding:'10px', backgroundColor:'lightgrey'}}>
                  {f.common.flightStep} Tramo
                </div>
                <div style={{display:'flex','alignItems':'center', 'justifyContent':'center', margin:'5px'}}>
                  <img src={f.common.airlineLogo} />
                  <div>{f.common.provider}</div>
                </div>
                <div style={{textAlign:'center', margin:'5px'}}>
                  {f.common.class}
                </div>
                <div style={{textAlign:'center', margin:'5px'}}>
                  {f.common.flightNumber}
                </div>

              </div>

              <div style={{margin:'10px'}}>
                <div>
                  LLEGADA
                </div>
                <div>
                  {f.arrival.date.toString()}
                </div>
                <div>
                  {f.arrival.iata}
                </div>
                <div>
                  {f.arrival.date.getTime()}
                </div>
                <div>
                  {f.arrival.city}
                </div>
                <div>
                  {f.arrival.airport}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

FlightClusterRouteOption.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.object.isRequired,
  isExpanded:PropTypes.bool
}

FlightClusterRouteOption.defaultProps = {
  isExpanded: false
}

export default FlightClusterRouteOption;
