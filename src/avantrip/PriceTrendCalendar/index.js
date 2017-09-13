import React from 'react';
import PropTypes from 'prop-types';

import Chart from '../Chart';

const PriceTrendCalendar = ({data, disclaimer, onClick}) => {
  return (
    <div>
      <Chart
        data={data}
        value="price"
        label="name"
        onClick={onClick}/>
      {disclaimer &&
        <div>
          {disclaimer}
        </div>
      }
    </div>
  )
}

PriceTrendCalendar.propTypes = {
  data: PropTypes.array.isRequired,
  disclaimer: PropTypes.string,
  onClick: PropTypes.func
}

export default PriceTrendCalendar;
