import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../Text';
import InputRadio from '../InputRadio';
import ExpansionPanel from '../ExpansionPanel';
import {ExpandButton, ExtendedInformation} from '../ExpansionPanel/styled';
import {ClusterItem, ClusterContent, AirlineName, InfoContainer, AirlineContainer, FromTo, Detail, Origin, Arrival, Scale, Iata, Date, TripTitle, IataBold, MediumBold, DetailDeparture, DetailFlight, DetailArrival, DetailExtended, MainDetail, Delay, DelayContainer, Step, AirlineDetail} from './styled';
import { withState } from 'recompose';

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
    <ClusterItem onClick={onClick} selected={selected}>
      <ClusterContent>
        <ExpansionPanelWithState
          SummaryInformation={({onChange, isExpanded})  =>
            <InfoContainer>
              <InputRadio checked ={selected} />
              <AirlineContainer>
                <figure>
                  {
                    map(data.summaryInfo.airlineLogos, a => (
                      <img src={a} />
                    ))
                  }
                </figure>
                <AirlineName>
                  <Text tag='p'>
                    {data.summaryInfo.airlineName}
                  </Text>
                  <Text type='xs' tag='p'>
                    {data.summaryInfo.provider}
                  </Text>
                </AirlineName>
              </AirlineContainer>
              <FromTo>
                <Origin>
                  <Iata>
                    {data.summaryInfo.departureIata}
                  </Iata>
                  <Date>
                    {moment(data.summaryInfo.departureDate).format('HH:mm[hs]')}
                  </Date>
                </Origin>

                <Scale>
                  <ExpandButton onClick={onChange}>
                    <Text type='s'>
                      {data.summaryInfo.scalesText}
                    </Text>
                  </ExpandButton>
                </Scale>

                <Arrival>
                  <Iata>
                    {data.summaryInfo.arrivalIata}
                  </Iata>
                  <Date>
                    {moment(data.summaryInfo.arrivalDate).format('HH:mm[hs]')}
                  </Date>
                </Arrival>
              </FromTo>

              <Detail>
                <div>
                  {moment(data.summaryInfo.totalTime).format('HH:mm[hs]')}
                </div>
                <ExpandButton onClick={onChange}>
                  <Text type='s'>
                    Detalle
                  </Text>
                </ExpandButton>
              </Detail>

            </InfoContainer>
          }

          ExtendedInformation={({onChange}) =>
            <ExtendedInformation>
              <TripTitle>
                <Text tag='h1' type='m'>
                  {data.extendedInfo.header}
                </Text>
                <Text tag='h2' type='m'>
                  Duracion: {moment(data.summaryInfo.totalTime).format('HH:mm[hs]')}
                </Text>
              </TripTitle>
              {
                map(data.extendedInfo.flights, (f, index) => (
                  <MainDetail>
                    <DetailDeparture style={{margin:'10px', 'flexGrow':'1', 'flexBasis': '0'}}>
                      <Text type='m'>
                        SALIDA
                      </Text>
                      <MediumBold type='m' tag='strong'>
                        {moment(f.departure.date).format('ddd. DD MMM [de] YYYY')}
                      </MediumBold>
                      <IataBold tag='strong' type='xl'>
                        {f.departure.iata}
                      </IataBold>
                      <MediumBold type='m' tag='strong'>
                        {moment(f.departure.date).format('HH:mm[hs]')}
                      </MediumBold>
                      <Text>
                        {f.departure.city}
                      </Text>
                      <Text>
                        {f.departure.airport}
                      </Text>
                    </DetailDeparture>

                    <DetailFlight>
                      <Step>
                        {f.common.flightStep} Tramo
                      </Step>
                      <AirlineDetail>
                        <img src={f.common.airlineLogo} />
                        <Text tag='figcaption'>
                          {f.common.provider}
                        </Text>
                      </AirlineDetail>
                      <Text>
                        {f.common.class}
                      </Text>
                      <Text>
                        {f.common.flightNumber}
                      </Text>
                    </DetailFlight>

                    <DetailArrival style={{margin:'10px', 'flexGrow':'1', 'flexBasis': '0'}}>
                      <div>
                        LLEGADA
                      </div>
                      <div>
                        <MediumBold type='m' tag='strong'>
                          {moment(f.arrival.date).format('ddd. DD MMM [de] YYYY')}
                        </MediumBold>
                      </div>
                      <div>
                        <IataBold tag='strong' type='xl'>
                          {f.arrival.iata}
                        </IataBold>
                      </div>
                      <div>
                        <MediumBold type='m' tag='strong'>
                          {moment(f.arrival.date).format('HH:mm[hs]')}
                        </MediumBold>
                      </div>
                      <div>
                          {f.arrival.city}
                      </div>
                      <div>
                          {f.arrival.airport}
                      </div>
                    </DetailArrival>
                    {
                      data.extendedInfo.flights.length > 1 &&
                      index != data.extendedInfo.flights.length-1 &&
                      <DelayContainer>
                        <Delay tag='h3'>
                          Escala en {f.arrival.city} con espera de 23hs 59m
                        </Delay>
                      </DelayContainer>
                    }
                  </MainDetail>
                  )
                )
              }
            </ExtendedInformation>
          }
        />
      </ClusterContent>
    </ClusterItem>
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
