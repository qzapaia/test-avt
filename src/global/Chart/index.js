import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import Price from '../Price';
import Text from '../Text';
import ReactTooltip from 'react-tooltip';
import {ChartContainer, PromoPrice, PromoPriceMax, PromoPriceContainer} from './styled';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Rectangle, ReferenceLine, ResponsiveContainer} from 'recharts';

const onClickHandler = (e, onClick) => {
  onClick(e.payload);
}

const Chart = ({data, value, label, onClick, settings, CustomTooltip, renderBar }) => {
  settings = pick(settings, ['barColor']);

  let max = Math.max.apply(Math,data.map(o => o[value]));
  let min = Math.min.apply(Math,data.map(o => o[value]));

  return (
    <ChartContainer>
      <PromoPriceContainer>
        <PromoPriceMax top={max} data-tip data-for="MaxPrice">
          <Price price={max} type='xs' />
        </PromoPriceMax>
        <ReactTooltip id='MaxPrice'>
          <Text type='xs' color='white'>
            Tarifa mas alta
          </Text>
        </ReactTooltip>

        <PromoPrice top={min} data-tip data-for="MinPrice">
          <Price price={min} type='xs' />
        </PromoPrice>
        <ReactTooltip id='MinPrice'>
          <Text type='xs' color='white'>
            Tarifa mas baja
          </Text>
        </ReactTooltip>

      </PromoPriceContainer>
      <ResponsiveContainer>
        <BarChart
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
          <ReferenceLine y={min} />
          <ReferenceLine y={max} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>

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
