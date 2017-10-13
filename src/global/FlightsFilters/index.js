import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import CheckboxGroup from '../CheckboxGroup';
import { map, get } from 'lodash';
import ExpansionPanelEnhacer from "../ExpansionPanel/enhacer";
import Scales from './Scales';


const labelFlightsSchedules = (type,position) => {
  if(type == 'multidestino'){
    return `Vuelo ${position + 1}`
  }
  return (position == 0)? "Salida" : "Regreso"
}

const labelFlightsAirports = (type,position,city) => {
  if(type == 'multidestino'){
    return `Vuelo ${position + 1}`
  }
  return (position == 0)? `Salida ${city}` : `Regreso ${city}`
}

const FlightsFilters = ({
  options,
  values,
  onChange,
  onClear
}) => {

  return(
  <Container>
    <h2>Filtros de Búsqueda</h2>
    <Scales expanded={true} values={values} onChange={onChange} options={options} />
    <div>

      <CheckboxGroup
        label={'airlines'}
        onChange={onChangeHandler('airlines')(onChange)}
        options={options.airlines}
        values={get(values,'airlines',[])}
        onClear={()=>onClear('airlines')}
        allOptions={{
          label: <span>Todas las aerolineas</span>,
          checked: false
        }}
      />

      <h4>Horarios</h4>
      {map(options.schedules, (schedulesOptions, k) => (

        <CheckboxGroup
          label={labelFlightsSchedules(options.flightType,k)}
          onChange={onChangeHandler(`schedule.${k}`)(onChange)}
          options={schedulesOptions.options}
          values={get(values,['schedule', k])}
          onClear={()=>onClear(`schedule.${k}`)}
          allOptions={{
            label:<span>Todas los Horarios</span>,
            checked:false}}
          />
      ))}


      <h4>Aeropuertos</h4>
      {
        map(options.airports.items, (airports, k) => (
          map(airports,(optionsAirports,i)=>(
            <CheckboxGroup
            label={ labelFlightsAirports(options.flightType,k,options.airports.cities[i]) }
            onChange={onChangeHandler(`airports.${k}.${i}`)(onChange)}
            options={optionsAirports.options}
            values={ get(values,`airports.${k}.${i}`)}
            onClear={()=>onClear(`airports.${k}.${i}`)}
            allOptions={{
              label:<span>Todas los Aeropuertos</span>,
              checked:false}}
            />
          ))
        ))
      }

    </div>

  </Container>
)}

FlightsFilters.defaultProps = {
  values:{},
  options:{
    airports:{}
  }
}

const onChangeHandler = id => next => change => next(id, change)
export default FlightsFilters;
