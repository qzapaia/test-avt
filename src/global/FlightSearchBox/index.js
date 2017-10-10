import React from 'react';
import PropTypes from 'prop-types';
import RadiosGroup from '../RadioGroup';
import NumberGroup from '../NumberGroup';
import Select from '../Select';
import InputText from '../InputText';
import InputDate from '../InputDate';
import InputCheckbox from '../InputCheckbox';
import Button from '../Button';
import { map, has } from "lodash";
import moment from "moment";

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

const setDate = (values) => {
  let valor = '';
  if(values.index == 0) {
    valor = moment().add('days', 2).format("YYYY-MM-DD")
  } else {
    valor = moment(values.flights[values.index-1].dates).format("YYYY-MM-DD");
  }
  return valor;
}

const optionsToIterate = (initVal, values) => {
  const optionsValues = [];
  for (let i = initVal; i <= values; i++) {
    optionsValues.push({value: `${i}`, label: `${i}`});
  }
  return optionsValues;
}

  
const FlightSearchBox = ({title, onChange, onSearch, onSetSearchBoxFlight, value}) => (
  <div>
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
                >{`${destination.description} ${destination.iata_code}`}</option>
              ))
            }
            </InputText>
            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].destinationCity`)}
              placeholder= 'Ingresá el nombre de la ciudad de destino' 
              label='Hacia'
              option={flight}
              value={flight.destinationCity}
              requiresExistingValue={true}
            >
              {
              map(value.destinations, destination => (
                <option 
                  city={destination.city} 
                  value={destination.iata_code}
                >{`${destination.description} ${destination.iata_code}`}</option>
              ))
            }
            </InputText>
          </div>

          { flight.error.state && <p style={{color: '#ff0000'}}>{flight.error.message}</p>}

          <div>
            <InputDate
              range={value.leg == 1 ? true : false}
              onChange={customOnChange(onChange, `flights[${idx}].dates`)}
              dates={flight.dates}
              min={setDate({'flights':value.flights, 'leg': value.leg, 'index': idx}) }
              max={moment().add('days', 360).format("YYYY-MM-DD")}
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
            options={optionsToIterate(1,9)}
            />
          <Select
            name='children'
            placeholder='Niños'
            onChange={customOnChange(onChange, 'children')}
            value={value.children}
            options={optionsToIterate(0,9)}
            />
            
          <Select
            name='infants'
            placeholder='Bebés'
            onChange={customOnChange(onChange, 'infants')}
            value={value.infants}
            options={optionsToIterate(0, value.adults)}
            />
            { value.amountOfTravellers.state && <p style={{color:'#ff0000'}}>{value.amountOfTravellers.message}</p>}
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
  </div>
)


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
