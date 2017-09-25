import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';

import {BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine} from 'recharts';

const onClickHandler = (e, onClick) => {
  onClick({
    value: e.value,
    label: e.name
  });
}

const Chart = ({data, value, label, onClick, settings, CustomTooltip}) => {
  settings = pick(settings, ['width', 'height', 'barColor']);

  let max = Math.max.apply(Math,data.map(o => o[label]));
  let min = Math.min.apply(Math,data.map(o => o[label]));
  return (
    <div>
      <BarChart
        width={settings.width}
        height={settings.height}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis
          dataKey={label}/>
        <YAxis />
        { CustomTooltip &&
          <Tooltip content={ <CustomTooltip /> } />
        }
        { CustomTooltip ||
          <Tooltip />
        }
        <Bar
          maxBarSizeNumber={3}
          barSize={34}
          dataKey={ value }
          fill={ settings.barColor }
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
  settings: PropTypes.object,
  onClick: PropTypes.func,
}

Chart.defaultProps = {
  settings: {
    width: 600,
    height: 150,
    barColor: '#8884d8'
  },
}

export default Chart;
