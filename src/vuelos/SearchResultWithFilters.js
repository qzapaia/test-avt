import React from 'react';
import PropTypes from 'prop-types';

const SearchResultWithFilters = ({text, onFilterUpdated, filter}) => (
  <div>
    {text}
    <br/>
    {JSON.stringify(filter)}
    <br/>
    <button onClick={()=>{ onFilterUpdated('grupo','filtro',true) }}>Cambiar Filtros</button>
  </div>
)

SearchResultWithFilters.propTypes = {
  text: PropTypes.string.isRequired
}

SearchResultWithFilters.defaultProps = {
  text:'SearchResultWithFilters component'
}

export default SearchResultWithFilters;
