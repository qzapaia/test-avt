import React from "react";
import PropTypes from "prop-types";

import moment from "moment";

import Price from "../Price";

const CustomTooltip = ({ payload, label, active }) => (
  <div className="custom-tooltip">
    {active && <div>
      <p className="departureDate">{`Ida: ${moment(
        payload[0].payload.date
      ).format("dddd DD [de] MMMM")}`}</p>
      <p className="returnDate">{`Vuelta: ${moment(payload[0].payload.date)
        .add(payload[0].payload.travelDays, "days")
        .format("dddd DD [de] MMMM")}`}</p>
      <p className="desc">
        <Price
          currency= 'ARS'
          price={payload[0].payload.price}
        />
      </p>
    </div>}
  </div>
)

CustomTooltip.propTypes = {
  type: PropTypes.string,
  payload: PropTypes.array
};

export default CustomTooltip;
