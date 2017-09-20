import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Select from '../Select';

const getYears = (minDate, maxDate) => {
  const maxYear = maxDate && maxDate.year() || moment().year();
  const diffYears = minDate && (maxYear - minDate.year()) || 103;
  return Array.from(new Array(diffYears+1),(val,index)=>maxYear-index);
}

const getMonths = (year, min, max) => {
  if( !year || !min || !max ||
      year != min.year() &&
      year != max.year()
    )
    return Array.from(new Array(12),(val,index)=>({
      label: moment.months(index),
      value: index+1
    }));
  else if(year == min.year()){
    const minMonth = min.month();
    return Array.from(new Array(12-minMonth),(val,index)=>({
      label: moment.months(minMonth + index),
      value: minMonth + index+1
    }));
  }else if(year == max.year()){
    return Array.from(new Array(max.month()+1),(val,index)=>({
      label: moment.months(index),
      value: index+1
    }));
  }
}

const getDays = (daysInMonth, month, year, max, min) => {
  if( !year || !min || !max ||
      year != min.year() &&
      year != max.year() ||
      month != (min.month()+1) &&
      month != (max.month()+1)
    )
    return Array.from(new Array(daysInMonth),(val,index)=>index+1);
  else if(year == min.year() && month == (min.month()+1)){
    const minDate = min.date();
    return Array.from(new Array(daysInMonth-minDate+1),(val,index)=>minDate+index);
  }else if(year == max.year() && month == (max.month()+1)){
    return Array.from(new Array(max.date()),(val,index)=>index+1);
  }
}

const getDaysAmount = (month, year) => moment((year || "2017")+"-" +(month || "01") +"-01").daysInMonth();

const InputBirthday = ({
                        label,
                        value,
                        onChange,
                        max,
                        min
                      }) => {

  const { day, month, year } = value || {};
  min = min ? moment(min) : min;
  max = max ? moment(max) : max;

  const daysInMonth = getDaysAmount(month, year);
  const arrayDays = getDays(daysInMonth, month, year, max, min);
  const arrayMoths = getMonths(year, min, max);
  const arrayYears = getYears(min, max);

  if(day && (day > daysInMonth || !arrayDays.includes(Number(day)))){
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
          arrayDays.map(currentDay =>
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
            arrayMoths.map((currentMonth, index) =>
            <option
              key={"month"+currentMonth.value}
              value={currentMonth.value}>
              {currentMonth.label}
            </option>)
          }
        </Select>
        <Select
          value={year}
          onChange={selectedValue => onChange({year: selectedValue })}>
          <option disabled selected>Año</option>
          {
            arrayYears.map(currentYear =>
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
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
}

export default InputBirthday;
