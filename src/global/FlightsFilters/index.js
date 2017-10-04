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
}) => (
  <Container>
    <h2>Filtros de Búsqueda</h2>
    <h3>Escalas Tramos</h3>
    <div>
      {map(options.stages, (stageOptions, k) => (
        <CheckboxGroup
          label={'tramo' + k}
          onChange={onChangeHandler(`stages.${k}`)(onChange)}
          options={stageOptions.options}
          values={get(values,['stages', k])}
          onClear={()=>onClear(`stages.${k}`)}
          allOptions={{
            label:<span>Todas las escalas</span>,
            checked:false}}
          />
      ))}

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
