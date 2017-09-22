import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import datePickerCSS from 'react-dates/lib/css/_datepicker.css';
import { injectGlobal } from 'styled-components';

injectGlobal`${datePickerCSS}`

const InputDate = ({dates, onChange, focused, onFocus}) => (
  <div>
    <DateRangePicker
      startDate={dates.startDate} // momentPropTypes.momentObj or null,
      endDate={dates.endDate} // momentPropTypes.momentObj or null,
      onDatesChange={onChange} // PropTypes.func.isRequired,
      focusedInput={focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={onFocus} // PropTypes.func.isRequired,
    />
  </div>
)

InputDate.propTypes = {
  text: PropTypes.node.isRequired
}

InputDate.defaultProps = {
  text:'no value yet :('
}

export default InputDate;
