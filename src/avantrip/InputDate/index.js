import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import datePickerCSS from 'react-dates/lib/css/_datepicker.css';
import { injectGlobal } from 'styled-components';
import { withState, compose } from 'recompose';
import moment from 'moment';

injectGlobal`${datePickerCSS}`

const enhace = compose(
  withState('focused','onFocusChange',false),
);


const InputDate = (props) => (
  <div>
    <h4>{props.label}</h4>
    <DateRangePickerWithState {...props} />
  </div>
)

const DateRangePickerWithState =  enhace((props) => {

  const { dates,
          onChange,
          min,
          max,
          range } = props;

  const Com = range ? DateRangePicker : SingleDatePicker;

  return range ?
  <DateRangePicker
      {...props}
      startDate={dates.startDate} // momentPropTypes.momentObj or null,
      endDate={dates.endDate}
      isOutsideRange={isOutsideRange(props)}
      initialVisibleMonth={initialVisibleMonth(props)}
      onDatesChange={onChange} // momentPropTypes.momentObj or null,
      focusedInput={props.focused}
  /> :
  <SingleDatePicker
    {...props}
    date={dates.startDate}
    onDateChange={onChange}
    isOutsideRange={isOutsideRange(props)}
    initialVisibleMonth={initialVisibleMonth(props)}
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

  initialVisibleMonth:PropTypes.number
}

InputDate.defaultProps = {
  startDatePlaceholderText:'IDA',
  endDatePlaceholderText:'VUELTA',
  numberOfMonths:3
}

export default InputDate;
