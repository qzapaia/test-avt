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

const FlightSearchBox = ({title, onChange, onSearch, onSetSearchBoxFlight, value}) => {
  return (<div>
    {title}
    <div>
      <RadiosGroup
        label=''
        onChange={customOnChange(onChange, "leg")}
        options={[
          {
            value: '1',
            label: 'ida y vuelta'
          },
          {
            value: '2',
            label: 'ida'
          },
          {
            value: '3',
            label: 'varios Destinos'
          }
        ]}
        value= {value.leg}
      />
    </div>
    {
      map(value.flights, (flight, idx) => (
        <div>
          <div>
            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].originCity` )}
              placeholder= 'Ingresá el nombre de la ciudad de origen' 
              label='Desde'
              value={flight.originCity}
              requiresExistingValue='true'
            >
            {
              map(value.destinations, destination => (
                <option 
                  city={destination.city} 
                  value={destination.iata_code}
                >{destination.description}</option>
              ))
            }
            </InputText>
            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].destinationCity`)}
              placeholder= 'Ingresá el nombre de la ciudad de destino' 
              label='Hacia'
              option={flight}
              value={flight.destinationCity}
              requiresExistingValue='true'
            >
              {
              map(value.destinations, destination => (
                <option 
                  city={destination.city} 
                  value={destination.iata_code}
                >{destination.description}</option>
              ))
            }
            </InputText>
          </div>
          <div>
            <InputDate
              range={value.leg == 1 ? true : false}
              onChange={customOnChange(onChange, `flights[${idx}].dates`)}
              dates={flight.dates}
              forceDatesFormat={true}
            />
          </div>
        </div>
      ))}
      {value.leg == 3 &&<div>
        <p><a onClick={customOnSet(onSetSearchBoxFlight, 'remove')}>Quitar -</a></p>
        {value.flights.length < 3 && 
          <p><span onClick={customOnSet(onSetSearchBoxFlight, 'add')}>Agregar +</span></p>
        }
      </div>}
    <div>
      <InputCheckbox
        value='flexibleDates'
        onChange={customOnChange(onChange, "flexibleDates")}
        type='checkbox'
        label='Mis fechas son flexibles'
        checked={value.flexibleDates? true: false}
      />
    </div>
    <div>
          <Select
            name='adults'
            placeholder='Adultos'
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
            <Select
            name='children'
            placeholder='Niños'
            onChange={customOnChange(onChange, 'children')}
            value={value.children}
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
            <Select
            name='infant'
            placeholder='Bebés'
            onChange={customOnChange(onChange, 'infant')}
            value={value.infant}
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
    </div>
    <div>
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
    </div>
    <div>
      <Button onClick={() => onCustomSearch(onSearch, value)}>Buscar</Button>
    </div>
  </div>)
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

export default FlightSearchBox;
