import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  border:solid 3px black;
  margin: 10px;
  padding:20px;
  font-size:20px;
`

const FlightsList = ({ items=[] }) => {

  return <div>
    <h2>Listado</h2>
    {items.map(i=>(
      <Item>{i.name}</Item>
    ))}
  </div>
}

FlightsList.propTypes = {
  items: PropTypes.array.isRequired
}


export default FlightsList;
