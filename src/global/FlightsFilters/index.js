import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import ExpansionPanel from '../ExpansionPanel';
import CheckboxGroup from '../CheckboxGroup';

const FlightsFilters = ({
  options,
  values,
  onChange,
  onClear
}) => (
  <Container>
    <h2>Filtros de Búsqueda</h2>
    <h3>Escalas</h3>
    <div>
      <CheckboxGroup
        label={'ida'}
        onChange={onChangeHandler('ida')(onChange)}
        options={options.ida}
        values={values.ida}
        onClear={()=>onClear('ida')}
        allOptions={{
          label:<span>Todas las escalas</span>,
          checked:false}}
      />
      <CheckboxGroup
        label={'vuelta'}
        onChange={onChangeHandler('vuelta')(onChange)}
        options={options.vuelta}
        values={values.vuelta}
        onClear={()=>onClear('vuelta')}
        allOptions={{
          label:<span>Todas las escalas</span>,
          checked:false}}
      />

      <CheckboxGroup
        label={'airlines'}
        onChange={onChangeHandler('airlines')(onChange)}
        options={options.airlines}
        values={values.airlines}
        onClear={()=>onClear('airlines')}
        allOptions={{
          label: <span>Todas las escalas</span>,
          checked: false
        }}
      />

      <h4>Horarios</h4>
      <CheckboxGroup
        label={'salida'}
        onChange={onChangeHandler('salida')(onChange)}
        options={options.salida}
        values={values.salida}
        onClear={()=>onClear('salida')}
        allOptions={{
          label: <span>Todas las escalas</span>,
          checked: false
        }}
      />
    </div>

  </Container>
)

FlightsFilters.propTypes = {
  // text: PropTypes.node.isRequired,
  // hoteles: PropTypes.arr,
  // getRepos: PropTypes.func,
  // repos: PropTypes.arr,
}

FlightsFilters.defaultProps = {

}

const onChangeHandler = id => next => change => next(id, change)

export default FlightsFilters;
