import React from "react";
import PropTypes from "prop-types";

import moment from "moment";

const CustomTooltip = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array
  },
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="departureDate">{`Ida: ${moment(
            payload[0].payload.date
          ).format("dddd DD [de] MMMM")}`}</p>
          <p className="returnDate">{`Vuelta: ${moment(payload[0].payload.date)
            .add(payload[0].payload.travelDays, "days")
            .format("dddd DD [de] MMMM")}`}</p>
          <p className="desc">{payload[0].payload.price}</p>
        </div>
      );
    }

    return null;
  }
});

export default CustomTooltip;
