import React from 'react';
import PropTypes from 'prop-types';
import { Container, List } from './styled';
import CheckboxGroup from '../CheckboxGroup';
import { map, get } from 'lodash';
import ExpansionPanelEnhacer from "../ExpansionPanel/enhacer";
import Text from "../Text";
import Icon from "../Icon";
import {ExpandButton} from "./styled";


const labelFlightsAirports = (type,position,city) => {
  if(type == 'multidestino'){
    return `Vuelo ${position + 1}`
  }
  return (position == 0)? `Salida ${city}` : `Regreso ${city}`
}



const Airlines = ({options, onChange, values, expanded, toggleExpand, onClear}) => {
  return(
    <List>
      <ExpandButton expanded={expanded} onClick={toggleExpand}>
        <Text tag='h2' type='s'>
          Aerolíneas
        </Text>
        <Icon id='Back' height='18px' width='18px' color='darkergray' />
      </ExpandButton>
      {expanded &&
        map(options.scales, (scalesOptions, k) => (
          <Text tag='li' type='xs'>
            <CheckboxGroup

              onChange={onChangeHandler('airlines')(onChange)}
              options={options.airlines}
              values={get(values,'airlines',[])}
              onClear={()=>onClear('airlines')}
              allOptions={{
                label: <span>Todas las aerolineas</span>,
                checked: false
              }}
            />
          </Text>
          ))
      }
    </List>
  )
}


const onChangeHandler = id => next => change => next(id, change)
export default ExpansionPanelEnhacer(Airlines);
