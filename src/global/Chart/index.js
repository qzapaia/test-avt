import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import Price from '../Price';

import {BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, Rectangle, ResponsiveContainer} from 'recharts';

const onClickHandler = (e, onClick) => {
  onClick(e.payload);
}

const Chart = ({data, value, label, onClick, settings, CustomTooltip, renderBar }) => {
  settings = pick(settings, ['barColor']);

  let max = Math.max.apply(Math,data.map(o => o[value]));
  let min = Math.min.apply(Math,data.map(o => o[value]));

  return (
    <ResponsiveContainer>
      <BarChart
        // width={settings.width}
        // height={settings.height}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis
          dataKey={label}/>
        <YAxis />
        { CustomTooltip &&
          <Tooltip content={ <CustomTooltip /> } />
        }
        { !CustomTooltip &&
          <Tooltip />
        }
        <Bar
          maxBarSizeNumber={3}
          barSize={34}
          dataKey={ value }
          shape={args=><Rectangle {...renderBar(args)}/>}
          fill={ settings.barColor }
          onClick={e => onClickHandler(e, onClick)} />
        {/* <ReferenceLine y={max} label={max} stroke="red" /> */}
        <ReferenceLine y={min} label={min} stroke="green" />
      </BarChart>
    </ResponsiveContainer>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  settings: PropTypes.object,
  onClick: PropTypes.func,
  renderBar: PropTypes.func,
}

Chart.defaultProps = {
  settings: {
    // width: 600,
    // height: 150,
    barColor: '#abd3ee'
  },
  renderBar:args=>args
}

export default Chart;
