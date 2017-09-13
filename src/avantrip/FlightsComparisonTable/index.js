import React from 'react';
import PropTypes from 'prop-types';

import { groupby } from 'lodash';

const groupByAirlineName = flights => {
  return _.groupBy(flights, 'name');
}

const getBestPriceByScale = flights => {
	let scalesWithBestPrice = [];

  _.forEach(flights, ( flightData, scaleType ) => {  

    let smallestPrice = flightData.reduce( (minPrice, currentFlight) => {
      if(currentFlight){
        minPrice = minPrice < currentFlight.price ? minPrice : currentFlight.price;
      }
      return minPrice;
    });

		scalesWithBestPrice.push({
			'scaleType':scaleType,
			'price':smallestPrice
		})
  })  

  return scalesWithBestPrice;
}

const getBestPricesByScale = groupedFlightsByAirline => {

  let bestFlightsByAirlineAndScale = [];

  _.forEach(groupedFlightsByAirline, ( flights , airlineName ) => {

    //Agrupo por escala
    let flightsGroupedByScale = _.groupBy( flights , 'scaleType');

    bestFlightsByAirlineAndScale.push({
    	name: airlineName,
    	label:flights[0].label,
    	logo: flights[0].logo,
    	scales: _.orderBy(getBestPriceByScale(flightsGroupedByScale), 'scaleType')
    });
  })

  return bestFlightsByAirlineAndScale;
}

const getBestPricesByScaleWithGroupedFlights = groupedFlights => {
	const scalesAndPrices = _.reduce(groupedFlights, ( acc, current ) => {
		return acc.concat(current.scales)
	}, [])
 
	const groupedByScales = _.groupBy(scalesAndPrices, 'scaleType');

	const bestPricesByScales = _.map(groupedByScales, f => _.minBy(f, 'price'))

	return bestPricesByScales;
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

const FlightsComparisonTable = ({flights}) => {

	const groupedFlightsByAirlines = getBestPricesByScale(groupByAirlineName(flights));

	const groupedBestFlightsByPrice = getBestPricesByScaleWithGroupedFlights(groupedFlightsByAirlines);

	return(
	  <div style={containerStyle}>
	    <div style={firstColumnStyle}>
	    	<div>
	    		Precio más bajo por adulto
	    	</div>
	    	<div>
	    		<div>------------------</div>
	    		<div>
	    			Vuelo directo
	    		</div>
	    		<div>------------------</div>
	    		<div>
	    			1 escala
	    		</div>
	    		<div>------------------</div>
	    		<div>
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

				{_.map(groupedBestFlightsByPrice, f =>

					<div>
	    			-------------
	    			<br />
	    			{f.price}
					</div>

				)}
	    </div>

	    <div style={thirdColumnStyle}>
	    	<div>
	    		--------Izquierda
	    	</div>

	    	{_.map(groupedFlightsByAirlines, (flights, airlineName) => 
	    		(

	    			<div style={flightGroupStyle} >

	    				<div>
			    			<div>
			    				<img src={flights.logo} />
			    			</div>
			    			<div>
			    				{flights.label}
			    			</div>
			    		</div>

	    				{_.map(flights.scales, f =>

	    					<div>
				    			-------------
				    			<br />
				    			{f.price}
	    					</div>

	    				)}

	    			</div>

	    		)
	    	)}

	    	<div>
	    		--------Derecha
	    	</div>
	    </div>


	  </div>
	)
}

FlightsComparisonTable.propTypes = {
  //flights: PropTypes.array.isRequired
}

FlightsComparisonTable.defaultProps = {

}

export default FlightsComparisonTable;
