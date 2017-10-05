import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

const {{componentName}} = ({
  text,
  onClick,
  {{#redux}}
  repos,
  getRepos,
  {{/redux}}
  {{#withDataComponent}}
  flights,
  {{/withDataComponent}}
}) => (
  <Container onClick={onClick}>
    {{componentName}} component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>

    {{#withDataComponent}}
    <h3>Vuelos</h3>
    {flights.map(r=>(
      <div key={r.url}> {r.destination_name} </div>
    ))}
    {{/withDataComponent}}

    {{#redux}}
    <div>
      <h3>Repos</h3>
      <button onClick={getRepos}>Get Repos</button>
      {repos.map(r=>(
        <div key={r.name}> {r.name} </div>
      ))}
    </div>
    {{/redux}}
  </Container>
)

{{componentName}}.propTypes = {
  text: PropTypes.node.isRequired,
  {{#withDataComponent}}
  flights: PropTypes.array,
  {{/withDataComponent}}
  {{#redux}}
  getRepos: PropTypes.func,
  repos: PropTypes.array,
  {{/redux}}
}

{{componentName}}.defaultProps = {
  text:'no value yet :(',
  {{#withDataComponent}}
  flights:[],
  {{/withDataComponent}}
  {{#redux}}
  getRepos(){},
  repos:[],
  {{/redux}}
}

export default {{componentName}};
