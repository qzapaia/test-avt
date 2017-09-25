import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, Rectangle} from 'recharts';

const onClickHandler = (e, onClick) => {
  onClick({
    value: e.value,
    label: e.name
  });
}

const Chart = ({data, value, label, onClick, setting, onBar }) => {
  setting = _.pick(setting, ['width', 'height', 'barColor']);

  let max = Math.max.apply(Math,data.map(o => o[label]));
  let min = Math.min.apply(Math,data.map(o => o[label]));

  return (
    <div>
      <BarChart
        width={setting.width}
        height={setting.height}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis
          dataKey={label}/>
        <YAxis />
        <Tooltip />
        <Bar
          maxBarSizeNumber={3}
          barSize={34}
          dataKey={ value }
          shape={args=><Rectangle {...onBar(args)}/>}
          fill={ setting.barColor }
          onClick={e => onClickHandler(e, onClick)} />
        <ReferenceLine y={max} label={max} stroke="red" />
        <ReferenceLine y={min} label={min} stroke="green" />
      </BarChart>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setting: PropTypes.object,
  onClick: PropTypes.func,
  onBar: PropTypes.func,
}

Chart.defaultProps = {
  setting: {
    width: 600,
    height: 150,
    barColor: '#8884d8'
  },
  onBar:args=>args
}

export default Chart;
