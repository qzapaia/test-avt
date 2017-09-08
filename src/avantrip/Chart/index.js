import React from 'react';
import PropTypes from 'prop-types';

import {BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine} from 'recharts';

const Chart = ({data, keyValue, keyName, onClick, setting}) => {
  let max = Math.max.apply(Math,data.map(o => o[keyName]));
  let min = Math.min.apply(Math,data.map(o => o[keyName]));
  return (
    <div>
      <BarChart
        width={setting.width}
        height={setting.height}
        data={data}
        margin={setting.margin}>
        <XAxis
          dataKey={keyName}/>
        <YAxis />
        <Tooltip />
        <Bar
          maxBarSizeNumber={ setting.bar.maxBarSizeNumber }
          barSize={ setting.bar.barSize }
          dataKey={ keyValue }
          fill={ setting.bar.fill }
          onClick={e => onClick(e[0].activePayload.value)} />
        <ReferenceLine y={max} label={max} stroke="red" />
        <ReferenceLine y={min} label={min} stroke="green" />
      </BarChart>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  keyValue: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  setting: PropTypes.object,
  onClick: PropTypes.func.isRequired,
}

Chart.defaultProps = {
  setting: {
    width: 600,
    height: 150,
    margin: {top: 5, right: 30, left: 20, bottom: 5},
    bar: {
      fill: '#8884d8',
      barSize: 34,
      maxBarSizeNumber: 3
    }
  },
}

export default Chart;
