import React from 'react';
import PropTypes from 'prop-types';

const JustOne = (Comp) => ({ value, options }) => (

    {options.map(o=>(
      <Comp selected={o == value}></Comp>
    ))}

);

export default JustOne;
