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
        onClick={onClick}
        onBar={args=>{
          if(args.index == 26){
            args.fill = '#f00';
          }
          return args;
        }}/>
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
