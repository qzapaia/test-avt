import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Select from '../Select';

const getYears = Array.from(new Array(100),(val,index)=>2017-index);
const getDays = max => Array.from(new Array(max),(val,index)=>index+1);
const getMonths = Array.from(new Array(12),(val,index)=>moment.months(index));
const getDaysAmount = (month, year) => moment((year || "2017")+"-" +(month || "01") +"-01").daysInMonth();

const InputBirthday = ({label, value, onChange}) => {
  const { day, month, year } = value || {};
  const daysInMonth = getDaysAmount(month, year);

  if(day > daysInMonth){
    onChange({ day: "" });
  }

  return (<div>
    <label>
      {label}
      <Select
        value={day}
        onChange={selectedValue => onChange({day: selectedValue })} >
        <option disabled selected>Día</option>
        {
          getDays(daysInMonth).map(currentDay =>
            <option
              key={"day"+currentDay}
              value={currentDay}>
              {currentDay}
            </option>)
          }
        </Select>
        <Select
          value={month}
          onChange={selectedValue => onChange({month: selectedValue })}>
          <option disabled selected>Mes</option>
          {
            getMonths.map((currentMonth, index) =>
            <option
              key={"month"+currentMonth}
              value={index+1}>
              {currentMonth}
            </option>)
          }
        </Select>
        <Select
          value={year}
          onChange={selectedValue => onChange({year: selectedValue })}>
          <option disabled selected>Año</option>
          {
            getYears.map(currentYear =>
              <option
                key={"year"+currentYear}
                value={currentYear}>
                {currentYear}
              </option>)
            }
          </Select>
    </label>
  </div>);
}

InputBirthday.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
}

export default InputBirthday;
