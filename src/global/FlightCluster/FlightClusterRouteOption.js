import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../Text';
import InputRadio from '../InputRadio';
import ExpansionPanel from '../ExpansionPanel'
import {ExpandButton, ExtendedInformation} from '../ExpansionPanel/styled'
import { withState } from 'recompose'

import { map } from 'lodash'

const formatMinutes = minutes => moment()
                                .startOf('day')
                                .add(minutes, 'minutes')
                                .format('hh[hs] mm[m] ')

const enhace = withState('isExpanded','changeState', false);
const ExpansionPanelWithState =  enhace((props) => {
  const { isExpanded, changeState } = props;

  const changeHandler = (isExpandedParam) => {
    changeState(isExpandedParam);
  }

  return (
    <ExpansionPanel {...props}
      isExpanded={isExpanded}
      onChange={changeHandler} />
  )
})

const FlightClusterRouteOption = ({data, onClick, selected}) => {
  return (
    <div>
      {selected}
      <div style={{display:'flex', 'height':'70px', 'alignItems':'center'}} onClick={onClick}>
        <InputRadio style={{'flexGrow':1}}></InputRadio>
        <div style={{'flexGrow':10}}>
          <ExpansionPanelWithState 
            SummaryInformation={({onChange, isExpanded})  =>
              <div>
                <div style={{display:'flex','alignItems':'center', 'justifyContent':'space-around'}}>
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
                      {moment(data.summaryInfo.departureDate).format('HH:mm[hs]')}  
                    </div>
                  </div>

                  <ExpandButton onClick={onChange}>
                    <Text type='s'>
                      {data.summaryInfo.scalesText}
                    </Text>
                  </ExpandButton>

                  <div>
                    <div>
                      {data.summaryInfo.arrivalIata}
                    </div>
                    <div>
                      {moment(data.summaryInfo.arrivalDate).format('HH:mm[hs]')} 
                    </div>
                  </div>

                  <div>
                    <div>
                      {moment(data.summaryInfo.totalTime).format('HH:mm[hs]')}
                    </div>
                    <ExpandButton onClick={onChange}>
                      <Text type='s'>
                        Detalle
                      </Text>
                    </ExpandButton>
                  </div>

                </div>
              </div>
            }

            ExtendedInformation={({onChange}) =>
              <ExtendedInformation>
                <div>
                  <div style={{backgroundColor:'lightgrey', 'height':'35px', display:'flex','alignItems':'center'}}>
                    <div>
                      {data.extendedInfo.header}
                    </div>
                  </div>
                  {
                    map(data.extendedInfo.flights, (f, index) => (
                      <div>
                        <div style={{display:'flex','justifyContent':'center'}}>
                          <div style={{margin:'10px', 'flexGrow':'1', 'flexBasis': '0'}}>
                            <div style={{textAlign:'right'}}>
                              SALIDA
                            </div>
                            <div style={{textAlign:'right'}}>
                              {moment(f.departure.date).format('ddd. DD MMM [de] YYYY')}
                            </div>
                            <div style={{textAlign:'right'}}>
                              {f.departure.iata}
                            </div>
                            <div style={{textAlign:'right'}}>
                              {moment(f.departure.date).format('HH:mm[hs]')}
                            </div>
                            <div style={{textAlign:'right'}}>
                              {f.departure.city}
                            </div>
                            <div style={{textAlign:'right'}}>
                              {f.departure.airport}
                            </div>
                          </div>

                          <div style={{margin:'10px', 'flexGrow':'1', 'flexBasis': '0'}}>
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

                          <div style={{margin:'10px', 'flexGrow':'1', 'flexBasis': '0'}}>
                            <div>
                              LLEGADA
                            </div>
                            <div>
                              {moment(f.arrival.date).format('ddd. DD MMM [de] YYYY')}
                            </div>
                            <div>
                              {f.arrival.iata}
                            </div>
                            <div>
                              {moment(f.arrival.date).format('HH:mm[hs]')}
                            </div>
                            <div>
                              {f.arrival.city}
                            </div>
                            <div>
                              {f.arrival.airport}
                            </div>
                          </div>
                        </div>
                        {
                          data.extendedInfo.flights.length > 1 && 
                          index != data.extendedInfo.flights.length-1 &&
                          <div style={{
                            'borderWidth': '1px',
                            'borderStyle': 'dashed',
                            'padding':'5px',
                            'textAlign':'center'
                          }}>
                            Escala en {f.arrival.city} con espera de 23hs 59m
                          </div>

                        }

                      </div>
                      )
                    )
                  }
                </div>
              </ExtendedInformation>
            }
          />
        </div>
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
