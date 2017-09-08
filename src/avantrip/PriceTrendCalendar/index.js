import React from 'react';
import PropTypes from 'prop-types';

import Chart from '../Chart';

const PriceTrendCalendar = ({data, disclaimer}) => {
    return (
        <div>
            <Chart data={data} keyValue="price" keyName="name"/>
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
  disclaimer: PropTypes.string
}

export default PriceTrendCalendar;
