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
  hoteles,
  {{/withDataComponent}}
}) => (
  <Container onClick={onClick}>
    {{componentName}} component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>

    {{#withDataComponent}}
      <h3>Hoteles</h3>
      {hoteles.map(r=>(
        <div key={r.name}> {r.name} </div>
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
  hoteles: PropTypes.arr,
  {{/withDataComponent}}
  {{#redux}}
  getRepos: PropTypes.func,
  repos: PropTypes.arr,
  {{/redux}}
}

{{componentName}}.defaultProps = {
  text:'no value yet :(',
  {{#withDataComponent}}
  hoteles:[],
  {{/withDataComponent}}
  {{#redux}}
  getRepos(){},
  repos:[],
  {{/redux}}
}

export default {{componentName}};
