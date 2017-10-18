import React from "react";
import PropTypes from "prop-types";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import datePickerCSS from "react-dates/lib/css/_datepicker.css";
import { injectGlobal, withTheme } from "styled-components";
import { withState, compose } from "recompose";
import moment from "moment";
import { get } from "lodash";

injectGlobal`${datePickerCSS}`;

const InputDate = props => (
  <div>
    <h4>{props.label}</h4>
    <DateRangePickerWithState {...props} />
  </div>
);

const enhace = compose(withState("focused", "onFocusChange", null));

const DateRangePickerWithState = enhace(props => {
  const {
    dates,
    onChange,
    range,
    forceDatesFormat,
    onFocusChange,
    focused,
    numberOfMonths,
    displayFormat,
    placeholder,
    startDatePlaceholderText,
    endDatePlaceholderText
  } = props;

  return range ? (
    <DateRangePicker
      onFocusChange={onFocusChange}
      displayFormat={displayFormat}
      startDate={dates ? moment(dates.startDate) : null}
      endDate={dates ? moment(dates.endDate) : null}
      numberOfMonths={numberOfMonths || 3}
      isOutsideRange={isOutsideRange(props)}
      initialVisibleMonth={initialVisibleMonth(props)}
      onDatesChange={onChange}
      focusedInput={focused || null}
      startDatePlaceholderText={startDatePlaceholderText}
      endDatePlaceholderText={endDatePlaceholderText}
    />
  ) : (
    <SingleDatePicker
      date={moment(dates)}
      focused={focused || null}
      onDateChange={val=>{
        forceDatesFormat ? onChange({startDate:val}) : onChange(val);
      }}
      placeholder={placeholder}
      numberOfMonths={numberOfMonths || 1}
      isOutsideRange={isOutsideRange(props)}
      initialVisibleMonth={initialVisibleMonth(props)}
      onFocusChange={({ focused }) => onFocusChange(focused)}
      displayFormat={displayFormat}
    />
  );
});

// Para que moment funcione correctamente hay que pasarle null cuando
// no hay ningun valor
const isOutsideRange = ({ min=null, max=null }) =>
                          day => !day.isBetween(min, max, 'day', "[]")


const initialVisibleMonth = ({ min }) => () => (min ? moment(min) : moment());

InputDate.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object,
  label: PropTypes.string,

  focused: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  min: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  max: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  startDatePlaceholderText: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,

  numberOfMonths: PropTypes.number,

  initialVisibleMonth: PropTypes.number,
  range: PropTypes.bool,
  placeholder: PropTypes.string,

  forceDatesFormat: PropTypes.bool,
  displayFormat: DateRangePicker.propTypes.displayFormat,
};

InputDate.defaultProps = {
  startDatePlaceholderText: "IDA",
  endDatePlaceholderText: "VUELTA",
  range: false,
  placeholder: "",
  forceDatesFormat:false,
  displayFormat:'DD/MM/YYYY'
};

// customización overrideando css de airbnb, lo envuelvo en un comp
// para poder acceder al theme

const InputDateWithCustomization = withTheme((props) => {
  injectGlobal`

    .CalendarDay--selected-start,
    .CalendarDay--selected-end,
    .CalendarDay--selected{
      background-color: ${props.theme.colors.brand};
    }

  `;

  return <InputDate {...props} />
})

export default InputDateWithCustomization;
