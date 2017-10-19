import React from 'react';
import PropTypes from 'prop-types';
import { Container, List } from './styled';
import CheckboxGroup from '../CheckboxGroup';
import { map, get } from 'lodash';
import ExpansionPanelEnhacer from "../ExpansionPanel/enhacer";
import Text from "../Text";
import Icon from "../Icon";
import {ExpandButton} from "./styled";

const labelFlightsAirports = (type,position,positionTramo,city) => {
  if(type == 'multitrip'){
    return (position == 0)?`Vuelo ${positionTramo + 1} ${city}`:`${city}`
  }
  return (position == 0)? `Salida ${city}` : `Regreso ${city}`
}

const Airports = ({options, onChange, values, expanded, toggleExpand, onClear}) => {
  return(
    <List>
      <ExpandButton expanded={expanded} onClick={toggleExpand}>
        <Text tag='h2' type='s'>
          Aeropuertos
        </Text>
        <Icon id='Back' height='18px' width='18px' color='darkergray' />
      </ExpandButton>
      {expanded &&
        map(options.airports.items, (airports, k) => (
            map(airports,(optionsAirports,i)=> (
                <Text tag='li' type='xs'>
                  <CheckboxGroup
                  label={ labelFlightsAirports(options.flightType,i,k,optionsAirports.city) }
                  onChange={onChangeHandler(`airports.${k}.${i}`)(onChange)}
                  options={optionsAirports.options}
                  values={ get(values,`airports.${k}.${i}`)}
                  onClear={()=>onClear(`airports.${k}.${i}`)}
                  allOptions={{
                    label:<span>Todos los Aeropuertos</span>,
                    checked:false}}
                  />
                </Text>
              ))
          ))
      }
    </List>
  )
}


const onChangeHandler = id => next => change => next(id, change)
export default ExpansionPanelEnhacer(Airports);
