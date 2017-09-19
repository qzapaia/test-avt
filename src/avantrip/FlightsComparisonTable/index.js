import React from 'react';
import PropTypes from 'prop-types';

const groupByAirlineName = flights => _.groupBy(flights, 'airlineName');


const getBestPriceByStop = flights =>
	_.map(flights, (flightData, stopType) => {
		return {
   		'stopType' : stopType,
   		'price' : _.minBy(flightData,'price').price
		}
	})


const getBestPricesByStop = groupedFlightsByAirline => 
	_.map(groupedFlightsByAirline, ( flights , airlineName ) => {
    return {
    	airlineName: airlineName,
    	label:flights[0].label,
    	logo: flights[0].logo,
    	stops: _.orderBy(getBestPriceByStop(_.groupBy( flights , 'stopType')), 'stopType')
    }
  })


const getBestPricesByStopWithGroupedFlights = groupedFlights => {

	const stopsAndPrices = _.reduce(groupedFlights, ( acc, current ) => 
		acc.concat(current.stops), [])
 
	const groupedByStops = _.groupBy(stopsAndPrices, 'stopType');

	const bestPricesByStops = _.map(groupedByStops, f => _.minBy(f, 'price'))

	return bestPricesByStops;
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

	const groupedFlightsByAirlines = getBestPricesByStop(groupByAirlineName(flights));

	const groupedBestFlightsByPrice = getBestPricesByStopWithGroupedFlights(groupedFlightsByAirlines);

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

	    				{_.map(flights.stops, f =>

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
  flights: PropTypes.array.isRequired
}

FlightsComparisonTable.defaultProps = {

}

export default FlightsComparisonTable;
