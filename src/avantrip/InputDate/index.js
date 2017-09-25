import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import datePickerCSS from 'react-dates/lib/css/_datepicker.css';
import { injectGlobal } from 'styled-components';
import { withState, compose } from 'recompose';
import moment from 'moment';
import { get } from 'lodash';

injectGlobal`${datePickerCSS}`

const InputDate = (props) => (
  <div>
    <h4>{props.label}</h4>
    <DateRangePickerWithState {...props} />
  </div>
)

const enhace = compose(
  withState('focused','onFocusChange',false),
);

const DateRangePickerWithState =  enhace((props) => {

  const {
    dates,
    onChange,
    range,
    onFocusChange,
    focused,
    numberOfMonths
  } = props;

  return range ?
  <DateRangePicker
      {...props}
      startDate={get(dates,'startDate')} // momentPropTypes.momentObj or null,
      endDate={get(dates,'endDate')}
      numberOfMonths={numberOfMonths || 3}
      isOutsideRange={isOutsideRange(props)}
      initialVisibleMonth={initialVisibleMonth(props)}
      onDatesChange={onChange} // momentPropTypes.momentObj or null,
      focusedInput={focused}
  /> :
  <SingleDatePicker
    {...props}
    date={dates}
    onDateChange={onChange}
    numberOfMonths={numberOfMonths || 1}
    isOutsideRange={isOutsideRange(props)}
    initialVisibleMonth={initialVisibleMonth(props)}
    onFocusChange={({ focused })=>onFocusChange(focused)}
  />
})

const isOutsideRange = ({min, max}) => day => (
  (min && max) && !day.isBetween(min,max)  ||
  min && !day.isAfter(min) ||
  max && !day.isBefore(max)
)

const initialVisibleMonth = ({ min }) => () =>  min ? moment(min) : moment();

InputDate.propTypes = {
  onChange:PropTypes.func.isRequired,
  value:PropTypes.object,
  label:PropTypes.string,

  focused: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),

  min:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  max:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  startDatePlaceholderText:PropTypes.string,
  endDatePlaceholderText:PropTypes.string,

  numberOfMonths:PropTypes.number,

  initialVisibleMonth:PropTypes.number,
  range:PropTypes.bool,
  placeholder:PropTypes.string,
}

InputDate.defaultProps = {
  startDatePlaceholderText:'IDA',
  endDatePlaceholderText:'VUELTA',
  range:false,
  placeholder:'',
}

export default InputDate;
