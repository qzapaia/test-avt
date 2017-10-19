import React from 'react';
import PropTypes from 'prop-types';
import RadiosGroup from '../RadioGroup';
import NumberGroup from '../NumberGroup';
import Select from '../Select';
import InputText from '../InputText';
import InputDate from '../InputDate';
import InputCheckbox from '../InputCheckbox';
import Button from '../Button';
import { map, has, forEach, times, parseInt, drop } from "lodash";
import moment from "moment";
import Text from "../Text";
import Icon from "../Icon";
import ExpansionPanelEnhacer from "../ExpansionPanel/enhacer";
import ReactTooltip from 'react-tooltip';
import {Container, MainTitle, TopSearch, Radios, FromTo, FlexibleDates, Passengers, SearchButton, DateContainer, PassengerItem, Tooltip, TooltipAlert, TooltipTitle, AddRemoveFlights, AddRemoveFlightsButton, MoreOptions, MoreOptionsContainer} from './styled';

const onCustomSearch = (next, value) => {
  next(value)
}

const customOnSet = (next, value) => e => {
  next(value)
}

const customOnChange = (next, name) => value => {

  if(name == 'adults' || name == 'children' || name == 'infants') {
    next({
      [name]:value.value
    })
  } else {
    next({
      [name]:value
    })
  }
}

const setDateAccordingFlight = (values) => {
  let valor = '';
  if(values.index == 0 && !has(values.flights[values.index].dates, 'startDate')) {
    valor = moment().add(2, 'days').format("YYYY-MM-DD")
  } else if(values.index == 0 && has(values.flights[values.index].dates, 'startDate')) {
    valor = moment(values.flights[values.index].dates.startDate).format("YYYY-MM-DD");
  } else {
    valor = moment(values.flights[values.index-1].dates).format("YYYY-MM-DD");
  }
  return valor;
}

const optionsToIterate = (values, fieldName) => {
  let start = 0;
  switch(fieldName) {
    case 'adults':
      start = parseInt(10 - values.children - values.infants);
    break;
    case 'children':
      start = parseInt(10 - values.adults - values.infants);
    break;
    case 'infants':
      const auxValue = parseInt(9 - values.adults - values.children);
      start = auxValue > values.adults ? parseInt(values.adults+1):parseInt(auxValue+1)
    break;

    default:
    break;
  }
  const optionsValues = [];
  times(start, (idx) => {
    optionsValues.push({value: idx, label: idx});
  })

  return fieldName == 'adults'? drop(optionsValues) :optionsValues;
}

const createOptionsDestinations = (allDestinations, flight) => {
  return allDestinations.filter(destination=>(
    flight.originCity != destination.iata_code
  )).map(destination=>(
    <option
      key={destination.city+destination.iata_code}
      city={destination.city}
      value={destination.iata_code}
    >
      {destination.description + ' ' + destination.iata_code}
    </option>
  ));
}

const FlightSearchBox = ({
  title,
  onChange,
  onSearch,
  onSetSearchBoxFlight,
  values,
  errors,
  destinations,
  expanded,
  toggleExpand
}) => {
  
  return (
    <Container>

    <TopSearch>
      <MainTitle type='m' tag='h1'>
        <Icon id='Vuelos' width='18px' height='18px' />
        {title}
      </MainTitle>
    </TopSearch>
    <Radios>
      <RadiosGroup
        label=''
        onChange={customOnChange(onChange, "leg")}
        options={[
          {
            value: '1',
            label: 'Ida y vuelta'
          },
          {
            value: '2',
            label: 'Solo ida'
          },
          {
            value: '3',
            label: 'Multidestino'
          }
        ]}
        value= {values.leg}
      />
    </Radios>
    {
      map(values.flights, (flight, idx) => (
        <div key={idx}>
          {values.leg == 3 && 
            <p>Vuelo {(idx+1)}</p>
          }
          <FromTo>
            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].originCity` )}
              placeholder= 'Desde'
              value={flight.originCity}
              requiresExistingValue={true}
            >
              {
                map(destinations, destination => (
                  <option
                    key={destination.city + destination.iata_code}
                    city={destination.city}
                    value={destination.iata_code}
                  >{`${destination.description} ${destination.iata_code}`}</option>
                ))
              }
            </InputText>

            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].destinationCity`)}
              placeholder= 'Hacia'
              option={flight}
              value={flight.destinationCity}
              requiresExistingValue={true}
            >
              {createOptionsDestinations(destinations, flight, 'destinationCity')}
            </InputText>
          </FromTo>
          <DateContainer>
            <InputDate
              range={values.leg == 1 ? true : false}
              onChange={customOnChange(onChange, `flights[${idx}].dates`)}
              dates={flight.dates}
              min={setDateAccordingFlight({'flights':values.flights, 'leg': values.leg, 'index': idx}) }
              max={moment().add(360, 'days').format("YYYY-MM-DD")}
              forceDatesFormat={true}
              startDatePlaceholderText='Partida'
              endDatePlaceholderText='Regreso'
              placeholder='Partida'
            />
          </DateContainer>
        </div>
      ))}
      {values.leg == 3 &&
        <AddRemoveFlights>
          <AddRemoveFlightsButton onClick={customOnSet(onSetSearchBoxFlight, 'remove')}>
            Quitar -
          </AddRemoveFlightsButton>
        {values.flights.length < 3 &&
          <AddRemoveFlightsButton onClick={customOnSet(onSetSearchBoxFlight, 'add')}>
            Agregar +
          </AddRemoveFlightsButton>
        }
      </AddRemoveFlights>}
    {values.leg != 3 &&
      <FlexibleDates>
        <InputCheckbox
          value='flexibleDates'
          onChange={customOnChange(onChange, "flexibleDates")}
          type='checkbox'
          label='Mis fechas son flexibles'
          checked={values.flexibleDates? true: false}
        />
    </FlexibleDates>}
    <Passengers>
      <PassengerItem>
        <Tooltip>
          <TooltipAlert type='s' data-tip data-for="adults">
            <TooltipTitle color='darkergray'>
              Adultos
            </TooltipTitle>
            <Icon id='Help' color='darkergray' width='14px' height='14px' />
          </TooltipAlert>
          <ReactTooltip id='adults'>
            <Text color='white'>
              +11 años
            </Text>
          </ReactTooltip>
        </Tooltip>
        <Select
          name='adults'
          placeholder='1'
          onChange={customOnChange(onChange, 'adults')}
          value={values.adults}
          options={optionsToIterate(values, 'adults')}
          />
        </PassengerItem>
        <PassengerItem>
          <Tooltip>
            <TooltipAlert type='s' data-tip data-for="kids">
              <TooltipTitle color='darkergray'>
                Niños
              </TooltipTitle>
              <Icon id='Help' color='darkergray' width='14px' height='14px' />
            </TooltipAlert>
            <ReactTooltip id='kids'>
              <Text color='white'>
                2 a 11 años
              </Text>
            </ReactTooltip>
          </Tooltip>
          <Select
          name='children'
          placeholder='0'
          onChange={customOnChange(onChange, 'children')}
          value={values.children}
          options={optionsToIterate(values, 'children')}
          />
        </PassengerItem>

        <PassengerItem>
          <Tooltip>
            <TooltipAlert type='s' data-tip data-for="babies">
              <TooltipTitle color='darkergray'>
                Bebés
              </TooltipTitle>
              <Icon id='Help' color='darkergray' width='14px' height='14px' />
            </TooltipAlert>
            <ReactTooltip id='babies'>
              <Text color='white'>
                0 a 2 años
              </Text>
            </ReactTooltip>
          </Tooltip>
          <Select
            name='infants'
            placeholder='0'
            onChange={customOnChange(onChange, 'infants')}
            value={values.infants}
            options={optionsToIterate(values, 'infants')}
          />
        </PassengerItem>

        <MoreOptions expanded={expanded} onClick={toggleExpand}>
          {expanded ? '- ': '+ '}
          opciones
        </MoreOptions>

        {expanded &&
        <MoreOptionsContainer>
          <RadiosGroup
            label='Clase'
            onChange={customOnChange(onChange, "class")}
            options={[
              {
                value: '1',
                label: 'Económica'
              },
              {
                value: '2',
                label: 'Business'
              }
            ]}
            value= {values.class}
          />
        </MoreOptionsContainer>}

    </Passengers>
    <SearchButton>
      <Button onClick={() => onCustomSearch(onSearch, values)}>Buscar vuelos</Button>
    </SearchButton>
  </Container>)
}

FlightSearchBox.propTypes = {}

FlightSearchBox.defaultProps = {
  values:{
    leg: 1,
    amountTraveller:{
      adults: 1
    },
    class: 1
  }
}

export default ExpansionPanelEnhacer(FlightSearchBox);
