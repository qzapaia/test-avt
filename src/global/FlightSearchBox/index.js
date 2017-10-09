import React from 'react';
import PropTypes from 'prop-types';
import RadiosGroup from '../RadioGroup';
import NumberGroup from '../NumberGroup';
import Select from '../Select';
import InputText from '../InputText';
import InputDate from '../InputDate';
import InputCheckbox from '../InputCheckbox';
import Button from '../Button';
import { map } from "lodash";
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

  if(name == 'adults' || name == 'children' || name == 'infant') {
    next({
      [name]:value.value
    })
  } else {
    next({
      [name]:value
    })
  }
}

const FlightSearchBox = ({
  title,
  onChange,
  onSearch,
  onSetSearchBoxFlight,
  value,
  expanded,
  toggleExpand
}) => {
  return (<Container>
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
        value= {value.leg}
      />
    </Radios>
    {
      map(value.flights, (flight, idx) => (
        <div>
          <FromTo>
            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].originCity` )}
              placeholder= 'Desde'
              value={flight.originCity}
              requiresExistingValue='true'
            >
            {
              map(value.destinations, destination => (
                <option
                  city={destination.city}
                  value={`${destination.description} ${destination.iata_code}`}
                >{`${destination.description} ${destination.iata_code}`}</option>
              ))
            }
            </InputText>
            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].destinationCity`)}
              placeholder= 'Hacia'
              option={flight}
              value={flight.destinationCity}
              requiresExistingValue='true'
            >
              {
              map(value.destinations, destination => (
                <option
                  city={destination.city}
                  value={`${destination.description} ${destination.iata_code}`}
                >{`${destination.description} ${destination.iata_code}`}</option>
              ))
            }
            </InputText>
          </FromTo>
          <DateContainer>
            <InputDate
              range={value.leg == 1 ? true : false}
              onChange={customOnChange(onChange, `flights[${idx}].dates`)}
              dates={flight.dates}
              forceDatesFormat={true}
              startDatePlaceholderText='Partida'
              endDatePlaceholderText='Regreso'
              placeholder='Partida'
            />
          </DateContainer>
        </div>
      ))}
      {value.leg == 3 &&
        <AddRemoveFlights>
          <AddRemoveFlightsButton onClick={customOnSet(onSetSearchBoxFlight, 'remove')}>
            Quitar -
          </AddRemoveFlightsButton>
        {value.flights.length < 3 &&
          <AddRemoveFlightsButton onClick={customOnSet(onSetSearchBoxFlight, 'add')}>
            Agregar +
          </AddRemoveFlightsButton>
        }
      </AddRemoveFlights>}
    <FlexibleDates>
      <InputCheckbox
        value='flexibleDates'
        onChange={customOnChange(onChange, "flexibleDates")}
        type='checkbox'
        label='Mis fechas son flexibles'
        checked={value.flexibleDates? true: false}
      />
    </FlexibleDates>
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
          placeholder='0'
          onChange={customOnChange(onChange, 'adults')}
          value={value.adults}
          options={[
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'},
            {value: '6', label: '6'},
            {value: '7', label: '7'},
            {value: '8', label: '8'},
            {value: '9', label: '9'}
          ]}
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
          value={value.children}
          options={[
            {value: '0', label: '0'},
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'},
            {value: '6', label: '6'},
            {value: '7', label: '7'},
            {value: '8', label: '8'},
            {value: '9', label: '9'}
          ]}
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
          name='infant'
          placeholder='0'
          onChange={customOnChange(onChange, 'infant')}
          value={value.infant}
          options={[
            {value: '0', label: '0'},
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'},
            {value: '6', label: '6'},
            {value: '7', label: '7'},
            {value: '8', label: '8'},
            {value: '9', label: '9'}
          ]}
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
            value= {value.class}
          />
        </MoreOptionsContainer>}

    </Passengers>
    <SearchButton>
      <Button onClick={() => onCustomSearch(onSearch, value)}>Buscar vuelos</Button>
    </SearchButton>
  </Container>)
}

FlightSearchBox.propTypes = {
  text: PropTypes.node.isRequired
}

FlightSearchBox.defaultProps = {
  value:{
    leg: 1,
    amountTraveller:{
      adults: 1
    },
    class: 1
  }
}

export default ExpansionPanelEnhacer(FlightSearchBox);
