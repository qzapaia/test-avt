import React from 'react';
import PropTypes from 'prop-types';

const JustOne = (Comp) => (props) => {
  const {
    selected,
    defaultValue,
    onChange,
    select,
  } = props;

  const selectedValue = selected || defaultValue;

  return <Comp
    {...props}
    selected={selectedValue}
    select={val=>()=>{
      select && select(val);
      onChange(val)
    }}
    isSelected={value => value==selectedValue}
  />
}


export default JustOne;
