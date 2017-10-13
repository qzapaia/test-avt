import React from 'react';
import PropTypes from 'prop-types';
import { Container, List } from './styled';
import CheckboxGroup from '../CheckboxGroup';
import { map, get } from 'lodash';
import ExpansionPanelEnhacer from "../ExpansionPanel/enhacer";
import Text from "../Text";
import Icon from "../Icon";
import {ExpandButton} from "./styled";

const labelFlightsSchedules = (type,position) => {
  if(type == 'multidestino'){
    return `Vuelo ${position + 1}`
  }
  return (position == 0)? "Salida" : "Regreso"
}

const Hours = ({options, onChange, values, expanded, toggleExpand, onClear}) => {
  return(
    <List>
      <ExpandButton expanded={expanded} onClick={toggleExpand}>
        <Text tag='h2' type='s'>
          Horarios
        </Text>
        <Icon id='Back' height='18px' width='18px' color='darkergray' />
      </ExpandButton>
      {expanded &&
        map(options.schedules, (schedulesOptions, k) => (
          <Text tag='li' type='xs'>
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
            </Text>
        ))

      }
    </List>
  )
}


const onChangeHandler = id => next => change => next(id, change)
export default ExpansionPanelEnhacer(Hours);
