import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import { getSize } from '../../utils/media';

const Test = ({
  text,
  onClick,
  repos,
  getRepos,
  flights,
}) => (
  <Container size={getSize()}>
    Test component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>

    <h3>Vuelos</h3>
    {flights.map(r=>(
      <div key={r.url}> {r.destination_name} </div>
    ))}

    <div>
      <h3>Repos</h3>
      <button onClick={getRepos}>Get Repos</button>
      {repos.map(r=>(
        <div key={r.name}> {r.name} </div>
      ))}
    </div>
  </Container>
)

Test.propTypes = {
  text: PropTypes.node.isRequired,
  flights: PropTypes.array,
  getRepos: PropTypes.func,
  repos: PropTypes.array,
}

Test.defaultProps = {
  text:'no value yet :(',
  flights:[],
  getRepos(){},
  repos:[],
}

export default Test;
