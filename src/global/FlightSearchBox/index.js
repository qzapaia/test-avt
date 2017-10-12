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
    valor = moment().add('days', 2).format("YYYY-MM-DD")
  } else if(values.index == 0 && has(values.flights[values.index].dates, 'startDate')) {
    valor = moment(values.flights[values.index].dates.startDate).format("YYYY-MM-DD");
  } else {
    valor = moment(values.flights[values.index-1].dates).format("YYYY-MM-DD");
  }
  return valor;
}

const optionsToIterate = (initVal, values) => {
  const optionsValues = [];
  times(values, (idx) => {
    optionsValues.push({value: idx, label: idx});
  })
  
  initVal && drop(optionsValues)
  return optionsValues;
}
      
const createOptionsDestinations = (allDestinations, flight) => {

  const options = [];
  forEach(allDestinations, (destination) => {
     if(flight.originCity != destination.iata_code){
        options.push(<option 
          city={destination.city} 
          value={destination.iata_code}
        >{`${destination.description} ${destination.iata_code}`}</option>)
      }
  });
  return options;
}
  
const FlightSearchBox = ({title, onChange, onSearch, onSetSearchBoxFlight, searchValues}) => (
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
        value= {searchValues.value.leg}
      />
    </div>
    {
      map(searchValues.value.flights, (flight, idx) => (
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
              map(searchValues.destinations, destination => (
                <option 
                  city={destination.city} 
                  value={destination.iata_code}
                >{`${destination.description} ${destination.iata_code}`}</option>
              ))
            }
            </InputText>
            
            { flight.error.state && <p style={{color: '#ff0000'}}>{flight.error.message}</p>}            
            
            <InputText
              onChange={customOnChange(onChange, `flights[${idx}].destinationCity`)}
              placeholder= 'Ingresá el nombre de la ciudad de destino' 
              label='Hacia'
              option={flight}
              value={flight.destinationCity}
              requiresExistingValue={true}
            >
             {createOptionsDestinations(searchValues.destinations, flight)}

            </InputText>
            
          </div>
          <div>
            <InputDate
              range={searchValues.value.leg == 1 ? true : false}
              onChange={customOnChange(onChange, `flights[${idx}].dates`)}
              dates={flight.dates}
              min={setDateAccordingFlight({'flights':searchValues.value.flights, 'leg': searchValues.value.leg, 'index': idx}) }
              max={moment().add('days', 360).format("YYYY-MM-DD")}
              forceDatesFormat={true}
            />
          </div>
          
        </div>
      ))}
      {searchValues.value.leg == 3 &&<div>
        <p><a onClick={customOnSet(onSetSearchBoxFlight, 'remove')}>Quitar -</a></p>
        {searchValues.value.flights.length < 3 && 
          <p><span onClick={customOnSet(onSetSearchBoxFlight, 'add')}>Agregar +</span></p>
        }
      </div>}
    <div>
      <InputCheckbox
        value='flexibleDates'
        onChange={customOnChange(onChange, "flexibleDates")}
        type='checkbox'
        label='Mis fechas son flexibles'
        checked={searchValues.value.flexibleDates? true: false}
      />
    </div>
    <div>
          <Select
            name='adults'
            placeholder='Adultos'
            onChange={customOnChange(onChange, 'adults')}
            value={searchValues.value.adults}
            options={optionsToIterate(true,10)}
            />
          <Select
            name='children'
            placeholder='Niños'
            onChange={customOnChange(onChange, 'children')}
            value={searchValues.value.children}
            options={optionsToIterate(false,10)}
            />
            
          <Select
            name='infants'
            placeholder='Bebés'
            onChange={customOnChange(onChange, 'infants')}
            value={searchValues.value.infants}
            options={optionsToIterate(false, parseInt(searchValues.value.adults+1))}
            />
            { searchValues.value.amountOfTravellers.state && <p style={{color:'#ff0000'}}>{searchValues.value.amountOfTravellers.message}</p>}
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
        value= {searchValues.value.class}
      />
    </div>
    <div>
      <Button onClick={() => onCustomSearch(onSearch, searchValues)}>Buscar</Button>
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
