import React from 'react';
import PropTypes from 'prop-types';

const SearchResultWithFilters = ({text}) => (
  <div>{text}</div>
)

SearchResultWithFilters.propTypes = {
  text: PropTypes.string.isRequired
}

SearchResultWithFilters.defaultProps = {
  text:'SearchResultWithFilters component'
}

export default SearchResultWithFilters;
