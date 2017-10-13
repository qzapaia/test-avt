import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import CheckboxGroup from '../CheckboxGroup';
import { map, get } from 'lodash';
import ExpansionPanelEnhacer from "../ExpansionPanel/enhacer";
import Text from "../Text";
import Icon from "../Icon";
import {ExpandButton} from "./styled";


const labelFlightsTramos = (type,position) => {
  if(type == 'multidestino'){
    return `Vuelo ${position + 1}`
  }
  return (position == 0)? "Ida" : "Vuelta"
}


const Scales = ({options, onChange, values, expanded, toggleExpand}) => {
  return(
    <div>
      <ExpandButton expanded={expanded}>
        <Text tag='h2' type='s' onClick={toggleExpand}>
          Escalas Tramos
        </Text>
        <Icon id='Back' height='16px' width='16px' color='darkergray' />
      </ExpandButton>
      {expanded &&
        map(options.scales, (scalesOptions, k) => (
          <Text type='xs'>
            <CheckboxGroup
              label={labelFlightsTramos(options.flightType,k)}
              onChange={onChangeHandler(`scales.${k}`)(onChange)}
              options={scalesOptions.options}
              values={get(values,['scales', k])}
              onClear={()=>onClear(`scales.${k}`)}
              allOptions={{
                label:<span>Todas las escalas</span>,
                checked:false}}
              />
          </Text>
          ))
      }
    </div>
  )
}


const onChangeHandler = id => next => change => next(id, change)
export default ExpansionPanelEnhacer(Scales);
