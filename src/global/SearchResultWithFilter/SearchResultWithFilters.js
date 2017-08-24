import React from 'react';
import PropTypes from 'prop-types';

// {
//   escalas:{
//     ida:[{
//       title:'todas',
//       value:false
//     }]
//     vuelta:
//   }
// }

const SearchResultWithFilters = ({text, onFilterUpdated, filter }) => (
  <div>
    {text}
    <br/>
    {JSON.stringify(filter)}
    <br/>
    <input type="checkbox"
           onChange={(e)=>{ onFilterUpdated('aerolineas','airfrance', e.target.checked) }} />
    <button onClick={()=>{ onFilterUpdated('aerolineas','airfrance',true) }}>Cambiar Filtros</button>
    <button onClick={()=>{console.log('ttttt')}}>tttt</button>
    {/* <SearchFilters ></SearchFilters>
    <SearchResults ></SearchResults> */}
  </div>
)

SearchResultWithFilters.propTypes = {
  text: PropTypes.string.isRequired
}

SearchResultWithFilters.defaultProps = {
  text:'SearchResultWithFilters component'
}

export default SearchResultWithFilters;
