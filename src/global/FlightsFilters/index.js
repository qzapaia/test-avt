import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import ExpansionPanel from '../ExpansionPanel';
import CheckboxGroup from '../CheckboxGroup';
import { map, get } from 'lodash';

const FlightsFilters = ({
  options,
  values,
  onChange,
  onClear
}) => {
  map(options.airports.items, (airports, k) => (
    map(airports,(optionsAirports,i)=>(
      console.log(optionsAirports.options)
      //console.log(get(values,['airports', `${k}.${i}`]))
    )) 
  ))    

  return(
  <Container>
    <h2>Filtros de Búsqueda</h2>
    <h3>Escalas Tramos</h3>
    <div>
      {map(options.scales, (scalesOptions, k) => (
        
        <CheckboxGroup
          label={(k==0)?"Ida" : "Vuelta"}
          onChange={onChangeHandler(`scales.${k}`)(onChange)}
          options={scalesOptions.options}
          values={get(values,['scales', k])}
          onClear={()=>onClear(`scales.${k}`)}
          allOptions={{
            label:<span>Todas las escalas</span>,
            checked:false}}
          />
      ))}

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
          label={(k==0)?"Salida" : "Regreso"}
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
            label={ (k==0)? `Salida ${options.airports.cities[i]}` : `Regreso ${options.airports.cities[i]}` }
            onChange={onChangeHandler(`airports.${k}.${i}`)(onChange)}
            options={optionsAirports.options}
            values={
              
              get(values,`airports.${k}.${i}`)
            }
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

FlightsFilters.propTypes = {
  // text: PropTypes.node.isRequired,
  // hoteles: PropTypes.arr,
  // getRepos: PropTypes.func,
  // repos: PropTypes.arr,
}

FlightsFilters.defaultProps = {
  values:{},
  options:{
    airports:{}
  }
}

const onChangeHandler = id => next => change =>{
  console.log(id,next)
  next(id, change)
} 

export default FlightsFilters;
