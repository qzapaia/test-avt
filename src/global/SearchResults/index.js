import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({
  text,
  onClick,
  repos,
  getRepos,
  hoteles,
}) => (
  <div onClick={onClick}>
    SearchResults component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>

      <h3>Hoteles</h3>
      {hoteles.map(r=>(
        <div key={r.name}> {r.name} </div>
      ))}

    <div>
      <h3>Repos</h3>
      <button onClick={getRepos}>Get Repos</button>
      {repos.map(r=>(
        <div key={r.name}> {r.name} </div>
      ))}
    </div>
  </div>
)

SearchResults.propTypes = {
  text: PropTypes.node.isRequired,
  hoteles: PropTypes.arr,
  getRepos: PropTypes.func,
  repos: PropTypes.arr,
}

SearchResults.defaultProps = {
  text:'no value yet :(',
  hoteles:[],
  getRepos(){},
  repos:[],
}

export default SearchResults;
