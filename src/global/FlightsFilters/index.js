import React from 'react';
import PropTypes from 'prop-types';
import { Container, FilterContainer } from './styled';
import CheckboxGroup from '../CheckboxGroup';
import { map, get } from 'lodash';
import ExpansionPanelEnhacer from "../ExpansionPanel/enhacer";
import Scales from './Scales';
import Airlines from './Airlines';
import Hours from './Hours';
import Airports from './Airports';
import Text from '../Text';


const labelFlightsSchedules = (type,position) => {
  if(type == 'multidestino'){
    return `Vuelo ${position + 1}`
  }
  return (position == 0)? "Salida" : "Regreso"
}

const FlightsFilters = ({
  options,
  values,
  onChange,
  onClear
}) => {

  return(
  <Container>
    <Text tag='h2' type='m'>
      Filtros de búsqueda
    </Text>
    <FilterContainer>
      <Scales onClear={onClear} expanded={true} values={values} onChange={onChange} options={options} />
      <Airlines onClear={onClear} expanded={false} values={values} onChange={onChange} options={options} />
      <Hours onClear={onClear} expanded={false} values={values} onChange={onChange} options={options} />
      <Airports onClear={onClear} expanded={false} values={values} onChange={onChange} options={options} />
    </FilterContainer>

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
