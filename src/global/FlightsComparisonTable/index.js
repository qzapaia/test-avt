import React from 'react';
import PropTypes from 'prop-types';
import {
  map,
  orderBy,
  groupBy,
  minBy,
  reduce,
  filter
} from 'lodash';

import AirlineLogo from "../AirlineLogo";
import Price from "../Price";
import Slider from "../Slider";
import Text from "../Text";

const onHandlerStop = (next, value) =>{
  next({
    type:"stop",
    value
  });
}

const onHandlerPrice = (next, value) =>{
  next({
    type:"price",
    value
  });
}

const groupByAirlineName = flights => groupBy(flights, 'airline.name');

const getBestPriceByStop = flights =>{
  const temp = [];
  for (var i = 0; i < 3; i++) {
    temp.push({
   		'stopType' : i,
   		'price' : flights[i] ? minBy(flights[i],'price').price : ""
		});
  }
  return temp;
}

const getBestPricesByStop = groupedFlightsByAirline =>
	map(groupedFlightsByAirline, flights => {
    return {
    	...flights[0],
    	stops: orderBy(getBestPriceByStop(groupBy( flights , 'stopType')), 'stopType')
    }
  })


const getBestPricesByStopWithGroupedFlights = groupedFlights => {

	const stopsAndPrices = reduce(groupedFlights, ( acc, current ) =>
		acc.concat(current.stops), [])

	const groupedByStops = groupBy(stopsAndPrices, 'stopType');

	return map(groupedByStops, f => minBy(filter(f, fl =>( fl.price != "")), 'price'));
}

const containerStyle = {
	backgroundColor : 'white',
	display : 'flex',
	alignItems: 'center'
};
const firstColumnStyle = {
	display : 'flex',
	flexDirection : 'column',
	margin:'20px'
}
const secondColumnStyle = {
	display : 'flex',
	flexDirection : 'column',
	margin:'20px'
}
const thirdColumnStyle = {
	display : 'flex',
	flexDirection : 'row',
	alignItems: 'center',
	margin:'20px'
}

const flightGroupStyle = {
	display: 'flex',
	flexDirection: 'column',
	margin:'10px'
}

const FlightsComparisonTable = ({ flights, onSearch }) => {
  const groupedFlightsByAirlines = getBestPricesByStop(
    groupByAirlineName(flights)
  );

  const groupedBestFlightsByPrice = getBestPricesByStopWithGroupedFlights(
    groupedFlightsByAirlines
  );

  return(
    <div style={containerStyle}>
      <div style={firstColumnStyle}>
        <div>
          Precio más bajo por adulto
        </div>
        <div>
          <div>------------------</div>
          <div onClick={e => onHandlerStop(onSearch, 0)}>
            Vuelo directo
          </div>
          <div>------------------</div>
          <div onClick={e => onHandlerStop(onSearch, 1)}>
            1 escala
          </div>
          <div>------------------</div>
          <div onClick={e => onHandlerStop(onSearch, 2)}>
            2 o más escalas
          </div>
        </div>
      </div>

      <div style={secondColumnStyle}>
        <div>
          <div>
            Mejor precio
          </div>
        </div>
        {map(groupedBestFlightsByPrice, f => (
          <div>
            {f.price != "" &&
              <Price price={f.price} onClick={e => onHandlerPrice(onSearch, f.price)}/>
            }
            {f.price == "" && "-" }
          </div>
        ))}
      </div>

      <div style={thirdColumnStyle}>
          {map(groupedFlightsByAirlines, flights => (
            <div style={flightGroupStyle} >

              <div>
                <div>
                  <AirlineLogo width="24px" code={flights.airline.code} />
                </div>
                <div>
                  <Text type="xs">{flights.airline.name}</Text>
                </div>
              </div>
              {map(flights.stops, f => (
                <div>
                  {f.price != "" &&
                  <Price price={f.price} onClick={e => onHandlerPrice(onSearch, f.price)}/>}
                  {f.price == "" && "-" }
                </div>
              ))}
            </div>

          )
        )}
      </div>


    </div>
  )
}

FlightsComparisonTable.propTypes = {
  flights: PropTypes.array,
  onSearch: PropTypes.func
}

FlightsComparisonTable.defaultProps = {
  flights: []
}

export default FlightsComparisonTable;
